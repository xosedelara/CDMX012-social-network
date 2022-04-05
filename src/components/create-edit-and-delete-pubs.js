/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { getCurrentUserName } from '../lib/firebaseApp.js';
import { deletePost, addPostCollection } from '../lib/addFirestore.js';
import { accessPosts } from '../lib/readFirestore.js';

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

export const deletePublication = (user, postUser, postId, postArea) => {
  let publicationDeletedMsg = '';
  if (user === postUser) {
    if (window.confirm("¿Segurx que deseas borrar?")) {
      deletePost(postId, postArea);
      publicationDeletedMsg = 'esta publicación ha sido eliminada';
      return publicationDeletedMsg;
    }
  } publicationDeletedMsg = 'no se pudo eliminar';
  return publicationDeletedMsg;
};

export const publishPublication = (publicationInput, postArea) => {
  if (publicationInput === null || publicationInput === '') {
    alert('No has escrito una publicación');
  } else {
    addPostCollection(publicationInput);
    accessPosts(postArea);
  }
};
