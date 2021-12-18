import { csrfFetch } from "./csrf";

// action types

const LOAD_COMMENTS = "comments/LOAD_COMMENTS";
const ADD_COMMENT = "comments/ADD_COMMENT";
const UPDATE_COMMENT = "comments/UPDATE_COMMENT";
const REMOVE_COMMENT = "comments/REMOVE_COMMENT";

//action creators

const load = (comments) => ({
  type: LOAD_COMMENTS,
  comments,
});
const add = (comment) => ({
  type: ADD_COMMENT,
  comment,comment
});
const update = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});
const remove = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});

//thunk action dispatchers

export const getcomments = (photoId) => async (dispatch) => {
  const response = await fetch(`/api/photos/${photoId}/comments`);

  if (response.ok) {
    const comments = await response.json();
    dispatch(load(comments));
  }
};

// export const getUserComments = (userId) => async (dispatch) => {
//   const response = await fetch(`/api/users/${userId}/comments`);

//   if (response.ok) {
//     const comments = await response.json();
//     dispatch(load(comments));
//   }
// };

// ************************************

export const createComment = (photoId, commentId, commentData) => async (dispatch) => {
  const response = await fetch(`/api/photos/${photoId}/comments/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentId, commentData),
  });

  if (response.ok) {

    const newComment = await response.json();
    dispatch(add(newComment));
  }
};

// export const editPhoto = (photo) => async (dispatch) => {
//   const response = await fetch(`/api/comments/${id}`, {
//     method: "PUT",
//     body: JSON.stringify(photo),
//   });

//   if (response.ok) {
//     const editedPhoto = await response.json();
//     dispatch(update(editedPhoto));
//   }
// };

export const deleteComment = (photoId, commentId) => async (dispatch) => {
  const response = await fetch(`/api/photos/${photoId}/comments/${commentId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(remove(commentId));
  }
};

//reducer

const initialState = {};

const commentReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_COMMENTS:
      let comments = Object.values(action.comments);
      comments.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case ADD_COMMENT:
      return { ...state, [action.comment.id]: action.comment };
    case UPDATE_COMMENT:
      return { ...state, [action.comment.id]: action.comment };
    case REMOVE_COMMENT:
      newState = { ...state };
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentReducer;