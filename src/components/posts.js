// eslint-disable-next-line import/no-cycle
// import { pubBarFunc } from './publication.js';

export const createPosts = () => {
  const userPicSpaceAttributes = {
    class: 'user-pic-space',
    id: 'userPicSpace',
  };
  const userPicAttributes = {
    class: 'user-pic',
    id: 'userPic',
    src: 'img/keira.jpg',
  };
  const userNameAttributes = {
    class: 'user-name',
    id: 'userName',
  };
  const editPubAttributes = {
    class: 'edit-pub',
    id: 'editPub',
    // falta agregar el src
  };
  const pubTextAttributes = {
    class: 'publication-input new-pub-text',
    // falta agregar el src
  };

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]));
  };

  const newPublication = document.createElement('section');
  const newPubPicSpace = document.createElement('figure');
  const newPubPic = document.createElement('img');
  const newPubName = document.createElement('p');
  const newPubText = document.createElement('p');
  const newPubProfile = document.createElement('section');
  const editPub = document.createElement('img'); // no he agregado icono de editar a imágenes
  const likePost = document.createElement('section');
  const likeIcon = document.createElement('img');
  const likeCount = document.createElement('p');
  const commentPost = document.createElement('section');
  const commentIcon = document.createElement('img');
  const commentSpace = document.createElement('input');

  newPublication.setAttribute('class', 'create-pubs');
  newPubProfile.setAttribute('class', 'pub-first-box');
  likePost.setAttribute('class', 'like-post');
  likeIcon.setAttribute('class', 'like-icon');
  likeCount.setAttribute('class', 'like-count');
  commentPost.setAttribute('class', 'comment-post');
  commentIcon.setAttribute('class', 'comment-icon');
  commentSpace.setAttribute('class', 'comment-space');

  setAttributes(newPubText, pubTextAttributes);
  setAttributes(newPubPicSpace, userPicSpaceAttributes);
  setAttributes(newPubPic, userPicAttributes);
  setAttributes(newPubName, userNameAttributes);
  setAttributes(editPub, editPubAttributes);

  //   newPubText.innerText = pubBarFunc.publicationInput.value; NECESITO AWEBO ESTO
  newPubName.innerText = 'Usuarix';
  //   pubBarFunc.publicationInput.value = null;

  newPubPicSpace.appendChild(newPubPic);
  newPubProfile.append(newPubPicSpace, newPubName);
  newPublication.append(newPubProfile, newPubText);
  //   pubBarFunc.publicationSpace.append(newPublication); Y ESTO
  //   pubBarFunc.createPublications.after(newPublication);
  //   return pubBarFunc.publicationSpace;
  return newPublication;
};
