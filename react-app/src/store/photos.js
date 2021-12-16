import { csrfFetch } from "./csrf";

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
const update = (photo) => ({
  type: UPDATE_PHOTO,
  photo,
});
const remove = (photoId) => ({
  type: REMOVE_PHOTO,
  photoId,
});


//thunk action dispatchers

export const getPhotos = () => async (dispatch) => {
    const response = await csrfFetch("/api/photos");

    if (response.ok) {
      const photos = await response.json();
      dispatch(load(photos));
    }
  };
  export const getUserPosts = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/photos`);

    if (response.ok) {
      const photos = await response.json();
      dispatch(load(photos));
    }
  };

  // ************************************

  export const createPhoto = (photoData) => async (dispatch) => {
    const { user_id, url, caption } = photoData;

    const form = new FormData();
    form.append("user_id", user_id);
    form.append("url", url);
    form.append("caption", caption);

    const res = await fetch("/api/photos", {
      method: "POST",
      body: form,
    });
  };
  export const editPhoto = (id, photoData) => async (dispatch) => {
    const response = await csrfFetch(`/api/photos/${id}`, {
      method: "PUT",
      body: JSON.stringify(photoData),
    });

    if (response.ok) {
      const editedPhoto = await response.json();
      dispatch(update(editedPhoto));
    }
  };

  export const deletePhoto = (photoId) => async (dispatch) => {
    const response = await csrfFetch(`/api/photos/${photoId}`, {
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
      let photos = Object.values(action.photos);
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
