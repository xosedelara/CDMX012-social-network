/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { getCurrentUserName } from '../lib/firebaseApp.js';
import { deletePost } from '../lib/firestore.js';

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

export const deletePublication = (user, postId) => {
  let publicationDeletedMsg = '';
  if (user === getCurrentUserName()) {
    deletePost(postId);
    publicationDeletedMsg = 'esta publicación ha sido eliminada';
  } else {
    publicationDeletedMsg = 'no se pudo eliminar';
  }
  return publicationDeletedMsg;
};
