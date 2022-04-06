/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { getCurrentUserName } from '../lib/firebaseApp.js';
import { deletePost, addPostCollection } from '../lib/addFirestore.js';
import { accessPosts } from '../lib/readFirestore.js';

function modifyText(postId) {
  const pubText = document.getElementById(`text${postId}`).innerText;
  console.log(pubText);
  const textSpace = document.getElementById(`textSapce${postId}`);
  textSpace.innerHTML = `
  <input class='to-modify-text' id='modifyText' value='${pubText}' />
  <img class='modify-text-icon' id='modifyTextIcon' src='img/modifyIcon.png' />
  `;
  const textInput = document.getElementsByTagName('input')[1];
  const end = textInput.value.length;
  textInput.setSelectionRange(end, end);
  textInput.focus();
  const modifyIcon = document.getElementById('modifyTextIcon');
  modifyIcon.addEventListener('click', () => {
    const modifiedText = document.getElementById('modifyText').value;
    textSpace.innerHTML = `<p class='publication-input' id='text${postId}'></p>`;
    const finalText = document.getElementById(`text${postId}`);
    finalText.innerHTML = modifiedText;
    return finalText;
  });
}

export const editPublication = (user, postId) => {
  if (user === getCurrentUserName()) {
    const textOptions = document.getElementById(`optionSection${postId}`);
    textOptions.style.visibility = 'visible';
    const editInput = document.createElement('input');
    editInput.setAttribute('class', 'edit-input');
    console.log(postId);
    // vincular con editPost(postId) en firebase, maybe un eventListener;
    modifyText(postId);
  } else {
    const textOptions = document.getElementById(`optionSection${postId}`);
    textOptions.innerHTML = '';
  }
};

export const deletePublication = (user, postUser, postId, postArea) => {
  let publicationDeletedMsg = '';
  if (user === postUser) {
    if (window.confirm('¿Segurx que deseas borrar?')) {
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
