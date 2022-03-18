export const pubBarFunc = () => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const publicationBarAttributes = {
    class: 'publication-Bar',
    id: 'publicationBar',
  };
  const userPicAttributes = {
    class: 'user-pic',
    id: 'userPic',
    src: '',
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
    class: 'upload-image-icon',
    id: 'uploadImageIcon',
    src: './img/imageIcon.png',
  };
  const uploadLocationAttributes = {
    class: 'upload-location-icon',
    id: 'uploadLocationIcon',
    src: './img/locationUploadIcon.png',
  };
  const publishButtonAttributes = {
    class: 'publish-button',
    id: 'publishButton',
  };

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]));
  };

  const publicationBar = document.createElement('div');
  const userPic = document.createElement('img');
  const userName = document.createElement('p');
  const publicationInput = document.createElement('input');
  const uploadImageIcon = document.createElement('img');
  const uploadLocation = document.createElement('img');
  const publishButton = document.createElement('button');
  const firstBox = document.createElement('section');
  const secondBox = document.createElement('section');
  const lastBox = document.createElement('section');

  setAttributes(publicationBar, publicationBarAttributes);
  setAttributes(userPic, userPicAttributes);
  setAttributes(userName, userNameAttributes);
  setAttributes(publicationInput, publicationInputAttributes);
  setAttributes(uploadImageIcon, uploadImageIconAttributes);
  setAttributes(uploadLocation, uploadLocationAttributes);
  setAttributes(publishButton, publishButtonAttributes);
  publicationBar.setAttribute('class', 'publication-bar');
  firstBox.setAttribute('class', 'pub-first-box');
  secondBox.setAttribute('class', 'pub-second-box');
  lastBox.setAttribute('class', 'pub-last-box');

  userName.innerText = 'holi';
  publishButton.innerText = 'Publicar';

  publicationBar.append(firstBox, secondBox, lastBox);
  firstBox.append(userPic, userName);
  secondBox.append(publicationInput);
  lastBox.append(uploadImageIcon, uploadLocation, publishButton);

  // uploadImageIcon.addEventListener('click', )

  return publicationBar;
};
