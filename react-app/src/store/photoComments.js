
// // action types

// const LOAD_PHOTO_COMMENTS = "photoComments/LOAD_PHOTO_COMMENTS";
// const ADD_PHOTO_COMMENT = "photoComments/ADD_PHOTO_COMMENT";
// const UPDATE_PHOTO_COMMENT = "photoComments/UPDATE_PHOTO_COMMENT";
// const REMOVE_PHOTO_COMMENT = "photoComments/REMOVE_PHOTO_COMMENT";

// //action creators

// const load = (photoComments) => ({
//   type: LOAD_PHOTO_COMMENTS,
//   photoComments,
// });
// const add = (photoComment) => ({
//   type: ADD_PHOTO_COMMENT,
//   photoComment
// });
// const update = (photoComment) => ({
//   type: UPDATE_PHOTO_COMMENT,
//   photoComment,
// });
// const remove = (photoCommentId) => ({
//   type: REMOVE_PHOTO_COMMENT,
//   photoCommentId,
// });

// // ************************************
// //thunk action dispatchers

// export const getPhotoComments = () => async (dispatch) => {
//   const response = await fetch("/api/photoComments/");

//   if (response.ok) {
//     const photoComments = await response.json();
//     dispatch(load(photoComments));
//   }
// };


// export const createphotoComment = (photoCommentData) => async (dispatch) => {
//   const response = await fetch("/api/photoComments/", {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(photoCommentData),
//   });

//   if (response.ok) {

//     const newphotoComment = await response.json();
//     dispatch(add(newphotoComment));
//   }
// };


// export const editphotoComment = (payload) => async (dispatch) => {
//   let {id, pcontent} = payload;
//   const response = await fetch(`/api/photoComments/${id}/`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(pcontent),
//   });

//   if (response.ok) {
//     const editedphotoComment = await response.json();
//     dispatch(update(editedphotoComment));
//   }
// };

// export const deletephotoComment = (photoCommentId) => async (dispatch) => {
//   const response = await fetch(`/api/photoComments/${photoCommentId}`, {
//     method: "DELETE",
//   });

//   if (response.ok) {
//     dispatch(remove(photoCommentId));
//   }
// };

// //reducer


// const photoCommentReducer = (state = {}, action) => {
//   let newState = {};
//   switch (action.type) {
//     case LOAD_PHOTO_COMMENTS:
//       let photoComments = Object.values(action.photoComments.photoComment);
//       photoComments.forEach((photoComment) => {
//         newState[photoComment.id] = photoComment;
//       });
//       return newState;
//     case ADD_PHOTO_COMMENT:
//       return { ...state, [action.photoComment.id]: action.photoComment };
//     case UPDATE_PHOTO_COMMENT:
//       return { ...state, [action.photoComment.id]: action.photoComment };
//     case REMOVE_PHOTO_COMMENT:
//       newState = { ...state };
//       delete newState[action.photoCommentId];
//       return newState;
//     default:
//       return state;
//   }
// };

// export default photoCommentReducer;
