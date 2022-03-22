/* eslint-disable max-len */
// eslint-disable-next-line import/no-cycle
import { createPosts } from './posts.js';

export const pubBarFunc = () => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const publicationSpaceAttributes = {
    class: 'publication-space',
    id: 'publicationSpace',
  };
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
  const publicationInputAttributes = {
    class: 'publication-input',
    id: 'publicationInput',
    placeholder: 'Publica algo...',
  };
  const uploadImageIconAttributes = {
    class: 'upload-image-icon pub-icon',
    id: 'uploadImageIcon',
    src: './img/imageIcon.png',
  };
  const uploadLocationAttributes = {
    class: 'upload-location-icon pub-icon',
    id: 'uploadLocationIcon',
    src: './img/locationUploadIcon.png',
  };
  const publishButtonAttributes = {
    class: 'publish-button',
    id: 'publishButton',
  };
  // const editPubAttributes = {
  //   class: 'edit-pub',
  //   id: 'editPub',
  //   // falta agregar el src
  // };

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]));
  };

  const publicationSpace = document.createElement('div');
  const createPublications = document.createElement('section');
  const firstBox = document.createElement('section');
  const secondBox = document.createElement('section');
  const thirdBox = document.createElement('section');
  const userPicSpace = document.createElement('figure');
  const userPic = document.createElement('img');
  const userName = document.createElement('p');
  const publicationInput = document.createElement('input');
  const uploadSpace = document.createElement('figure');
  const uploadImageIcon = document.createElement('img');
  const uploadLocation = document.createElement('img');
  const publishButton = document.createElement('button');

  setAttributes(publicationSpace, publicationSpaceAttributes);
  setAttributes(userPicSpace, userPicSpaceAttributes);
  setAttributes(userPic, userPicAttributes);
  setAttributes(userName, userNameAttributes);
  setAttributes(publicationInput, publicationInputAttributes);
  setAttributes(uploadImageIcon, uploadImageIconAttributes);
  setAttributes(uploadLocation, uploadLocationAttributes);
  setAttributes(publishButton, publishButtonAttributes);
  createPublications.setAttribute('class', 'create-pubs');
  firstBox.setAttribute('class', 'pub-first-box');
  secondBox.setAttribute('class', 'pub-second-box');
  uploadSpace.setAttribute('class', 'upload-space');
  thirdBox.setAttribute('class', 'pub-third-box');

  userName.innerText = 'Usuarix';
  publishButton.innerText = 'Publicar';

  userPicSpace.appendChild(userPic);
  firstBox.append(userPicSpace, userName);
  secondBox.appendChild(publicationInput);
  uploadSpace.append(uploadImageIcon, uploadLocation);
  thirdBox.append(uploadSpace, publishButton);
  createPublications.append(firstBox, secondBox, thirdBox);
  publicationSpace.append(createPublications);

  publishButton.addEventListener('click', () => {
    const newPub = createPosts();
    publicationSpace.append(newPub);
    const newPubText = document.querySelector('.new-pub-text');
    newPubText.innerText = publicationInput.value;
    publicationInput.value = null;
    // const newPublication = document.createElement('section');
    // const newPubPicSpace = document.createElement('figure');
    // const newPubPic = document.createElement('img');
    // const newPubName = document.createElement('p');
    // const newPubText = document.createElement('p');
    // const newPubProfile = document.createElement('section');
    // const editPub = document.createElement('img');
    // const likePost = document.createElement('section');
    // const likeIcon = document.createElement('img');
    // const likeCount = document.createElement('p');
    // const commentPost = document.createElement('section');
    // const commentIcon = document.createElement('img');
    // const commentSpace = document.createElement('input');

    // newPublication.setAttribute('class', 'create-pubs');
    // newPubText.setAttribute('class', 'publication-input');
    // newPubProfile.setAttribute('class', 'pub-first-box');
    // likePost.setAttribute('class', 'like-post');
    // likeIcon.setAttribute('class', 'like-icon');
    // likeCount.setAttribute('class', 'like-count');
    // commentPost.setAttribute('class', 'comment-post');
    // commentIcon.setAttribute('class', 'comment-icon');
    // commentSpace.setAttribute('class', 'comment-space');

    // setAttributes(newPubPicSpace, userPicSpaceAttributes);
    // setAttributes(newPubPic, userPicAttributes);
    // setAttributes(newPubName, userNameAttributes);
    // setAttributes(editPub, editPubAttributes);

    // newPubText.innerText = publicationInput.value;
    // newPubName.innerText = 'Usuarix';
    // publicationInput.value = null;

    // newPubPicSpace.appendChild(newPubPic);
    // newPubProfile.append(newPubPicSpace, newPubName);
    // newPublication.append(newPubProfile, newPubText);
    // publicationSpace.append(newPublication);
    // createPublications.after(newPublication);
  });
  return publicationSpace;
};
