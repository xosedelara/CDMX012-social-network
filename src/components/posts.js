/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
// import { pubBarFunc } from './publication.js';
// import { accessLikes } from '../lib/firebasePosts.js';
import { editPublication, deletePublication } from './editanddeletepubs.js';
// import { accessLikes } from '../lib/firebasePosts.js';

export const createPosts = (publicationInput, user, likes, photo, postId) => {
  const userPicSpaceAttributes = {
    class: 'user-pic-space',
    id: 'userPicSpace',
  };
  const userPicAttributes = {
    class: 'user-pic',
    id: 'userPic',
    src: photo,
  };
  const userNameAttributes = {
    class: 'user-name',
    id: 'userName',
  };
  const editPubAttributes = {
    class: 'edit-pub',
    id: 'editPub',
    src: './img/editicon.webp',
  };
  const deletePubAttributes = {
    class: 'delete-pub',
    id: 'deletePub',
    src: './img/deleteicon.png',
  };
  const pubTextAttributes = {
    class: 'publication-input',
  };
  const likeIconAttributes = {
    class: 'like-icon new-pub-icon',
    id: postId,
    src: 'img/likeIcon.png',
  };
  const likeCountAttributes = {
    class: 'like-count',
    id: 'likeCount',
  };
  const commentIconAttributes = {
    class: 'comment-icon new-pub-icon',
    id: 'commentIcon',
    src: 'img/commentIcon.png',
  };
  const commentSpaceAttributes = {
    class: 'publication-input',
    id: 'commentSpace',
    placeholder: 'Haz un comentario ...',
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
  const editPub = document.createElement('img');
  const deletePub = document.createElement('img');
  const likePost = document.createElement('section');
  const likeIcon = document.createElement('img');
  const likeCount = document.createElement('p');
  const commentPost = document.createElement('section');
  const commentIcon = document.createElement('img');
  const commentSpace = document.createElement('input');

  newPublication.setAttribute('class', 'create-pubs');
  newPubProfile.setAttribute('class', 'pub-first-box new-pub-profile');
  likePost.setAttribute('class', 'like-post');
  commentPost.setAttribute('class', 'comment-post');

  setAttributes(newPubText, pubTextAttributes);
  setAttributes(newPubPicSpace, userPicSpaceAttributes);
  setAttributes(newPubPic, userPicAttributes);
  setAttributes(newPubName, userNameAttributes);
  setAttributes(editPub, editPubAttributes);
  setAttributes(deletePub, deletePubAttributes);
  setAttributes(likeIcon, likeIconAttributes);
  setAttributes(likeCount, likeCountAttributes);
  setAttributes(commentIcon, commentIconAttributes);
  setAttributes(commentSpace, commentSpaceAttributes);

  newPubText.innerText = publicationInput;
  newPubName.innerText = user;
  let count = 0;
  let localCount = likes;
  likeCount.innerText = localCount;
  let checkClick = 1;

  newPubPicSpace.appendChild(newPubPic);
  likePost.append(likeIcon, likeCount);
  newPubProfile.append(newPubPicSpace, newPubName, likePost);
  commentPost.append(commentIcon, commentSpace);
  newPublication.append(newPubProfile, newPubText, editPub, deletePub, commentPost);

  // delete
  const deleteMessage = document.createElement('p');
  deleteMessage.innerText = 'has borrado esta publicación';

  const postArea = document.querySelector('#postArea');
  postArea.append(newPublication);

  likeIcon.addEventListener('click', () => {
    if (checkClick === 1) {
      count = 1;
      localCount += 1;
      likeIcon.src = 'img/likeIconFilled.png';
      checkClick = 2;
    } else {
      count = -1;
      localCount -= 1;
      likeIcon.src = 'img/likeIcon.png';
      checkClick = 1;
    }
    likeCount.innerText = localCount;
  });

  // botón editar
  editPub.addEventListener('click', () => {
    newPublication.appendChild(editPublication(user, postId));
  });

  // botón para borrar
  deletePub.addEventListener('click', () => {
    newPublication.appendChild(deletePublication(user, postId, postArea));
  });

  return postArea;
};
