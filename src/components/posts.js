/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
// import { pubBarFunc } from './publication.js';
// eslint-disable-next-line import/no-cycle
import { accessLikes } from '../lib/firebaseApp.js';

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
    // falta agregar el src
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
  newPublication.append(newPubProfile, newPubText, editPub, commentPost);

  const postArea = document.querySelector('#postArea');
  postArea.append(newPublication);

  const likeButton = document.getElementById(postId);

  likeButton.addEventListener('click', () => {
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
  accessLikes(count, postId);
  return postArea;
};
