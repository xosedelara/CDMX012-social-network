/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { getCurrentUserName, getCurrentUserPhoto } from '../lib/firebaseApp.js';
import { deletePost, addPostCollection, accessPosts } from '../lib/firestore.js';

export const editPublication = (user, postId) => {
  if (user === getCurrentUserName()) {
    const editInput = document.createElement('input');
    editInput.setAttribute('class', 'edit-input');
    console.log(postId);
    // vincular con editPost(postId) en firebase, maybe un eventListener;
    console.log('hasllegadoaqui');
  } else {
    alert('no puedes editar');
  }
};

export const deletePublication = (user, postId, postArea) => {
  let publicationDeletedMsg = '';
  if (user === getCurrentUserName()) {
    deletePost(postId, postArea);
    publicationDeletedMsg = 'esta publicación ha sido eliminada';
  } else {
    publicationDeletedMsg = 'no se pudo eliminar';
  }
  return publicationDeletedMsg;
};

export const publishPublication = (publicationInput, postArea) => {
  if (publicationInput === null || publicationInput === '') {
    alert('No has escrito una publicación');
  } else {
    addPostCollection(publicationInput, getCurrentUserPhoto());
    accessPosts(postArea);
  }
};