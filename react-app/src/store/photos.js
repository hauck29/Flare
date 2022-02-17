
// action types

const LOAD_PHOTOS = "photos/LOAD_PHOTOS";
const ADD_PHOTO = "photos/ADD_PHOTO";
const UPDATE_PHOTO = "photos/UPDATE_PHOTO";
const REMOVE_PHOTO = "photos/REMOVE_PHOTO";

//action creators

const load = (photos) => ({
  type: LOAD_PHOTOS,
  photos,
});
const add = (photo) => ({
  type: ADD_PHOTO,
  photo,
});
const update = (photo) => ({
  type: UPDATE_PHOTO,
  photo,
});
const remove = (photoId) => ({
  type: REMOVE_PHOTO,
  photoId,
});

// ************************************
//thunk action dispatchers

export const getPhotos = () => async (dispatch) => {
  const response = await fetch("/api/photos/");

  if (response.ok) {
    const photos = await response.json();
    dispatch(load(photos));
  }
};

// export const getOnePhoto = (id) => async (dispatch) => {
//   const response = await fetch(`/api/photos/${id}`);

//   if (response.ok) {
//     const photo = await response.json();
//     dispatch(load(photo));
//   }
// };


export const createPhoto = (photoData) => async (dispatch) => {
  console.log('@@@@@@@', photoData.get('image'));
  const response = await fetch("/api/photos/", {
    method: "POST",
    body: photoData,
  });

  if (response.ok) {

    const newPhoto = await response.json();
    dispatch(add(newPhoto));
  }
};

export const editPhoto = (payload) => async (dispatch) => {
  let {id, caption} = payload;
  const response = await fetch(`/api/photos/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(caption),
  });

  if (response.ok) {
    const editedPhoto = await response.json();
    dispatch(update(editedPhoto));
  }
};

export const deletePhoto = (photoId) => async (dispatch) => {
  const response = await fetch(`/api/photos/${photoId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(remove(photoId));
  }
};

//reducer

const initialState = {};

const photoReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_PHOTOS:
      let photos = Object.values(action.photos.photo);
      photos.forEach((photo) => {
        newState[photo.id] = photo;
      });
      return newState;
    case ADD_PHOTO:
      return { ...state, [action.photo.id]: action.photo };
    case UPDATE_PHOTO:
      return { ...state, [action.photo.id]: action.photo };
    case REMOVE_PHOTO:
      newState = { ...state };
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
};

export default photoReducer;
