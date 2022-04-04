/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../app.js';
import { pubBarFunc } from './publication.js';

export const mainPage = () => {
  const mainPageStructureAttributes = {
    class: 'main-page',
    id: 'mainPage',
  };
  const menuUpAttributes = {
    class: 'menu-up menu',
    id: 'menuUp',
  };
  const petspacePlanetAttributes = {
    class: 'petspace-planet icon',
    id: 'petspacePlanet',
    src: 'img/PetSpacePlanet.png',
  };
  const menuUpRightAttributes = {
    class: 'menu-up-r menu',
    id: 'menuUpRight',
  };
  const shopIconAttributes = {
    class: 'shop-icon icon',
    id: 'shopIcon',
    src: 'img/shopIcon.png',
  };
  const locationIconAttributes = {
    class: 'location-icon icon',
    id: 'locationIcon',
    src: 'img/locationIcon.png',
  };
  const searchIconAttributes = {
    class: 'search-icon icon',
    id: 'searchIcon',
    src: 'img/searchIcon.png',
  };
  const homePageAttributes = {
    class: 'home-page',
    id: 'homePage',
  };
  const homePageMAttributes = {
    class: 'home-page-M',
    id: 'homePageM',
  };
  const menuDownAttributes = {
    class: 'menu-down menu',
    id: 'menuDown',
  };
  const homeIconAttributes = {
    class: 'home-icon icon',
    id: 'homeIcon',
    src: 'img/homeIcon.png',
  };
  const menuIconAttributes = {
    class: 'menu-icon icon',
    id: 'menuIcon',
    src: 'img/menuIcon.png',
  };
  const notificationIconAttributes = {
    class: 'notification-icon icon',
    id: 'notificationIcon',
    src: 'img/notificationIcon.png',
  };
  const messageIconAttributes = {
    class: 'message-icon icon',
    id: 'messageIcon',
    src: 'img/messageIcon.png',
  };
  const profileIconAttributes = {
    class: 'profile-icon icon',
    id: 'profileIcon',
    src: 'img/profileIcon.png',
  };
  const menuLeftPcAttributes = {
    class: 'menu-left-pc',
    id: 'menuDown',
  };
  const homeIconPcAttributes = {
    class: 'home-icon-pc',
    id: 'homeIcon',
    src: 'img/homeIcon.png',
  };
  const menuIconPcAttributes = {
    class: 'menu-icon-pc icon',
    id: 'menuIcon',
    src: 'img/menuIcon.png',
  };
  const notificationIconPcAttributes = {
    class: 'notification-icon-pc icon',
    id: 'notificationIcon',
    src: 'img/notificationIcon.png',
  };
  const messageIconPcAttributes = {
    class: 'message-icon-pc icon',
    id: 'messageIcon',
    src: 'img/messageIcon.png',
  };
  const profileIconPcAttributes = {
    class: 'profile-icon-pc icon',
    id: 'profileIcon',
    src: 'img/profileIcon.png',
  };

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]));
  };

  const mainPageStructure = document.createElement('div');
  const menuUp = document.createElement('section');
  const petspacePlanet = document.createElement('img');
  const menuUpRight = document.createElement('section');
  const shopIcon = document.createElement('img');
  const locationIcon = document.createElement('img');
  const searchIcon = document.createElement('img');
  const homePage = document.createElement('section');
  const homePageM = document.createElement('p');
  const menuDown = document.createElement('section');
  const homeIcon = document.createElement('img');
  const menuIcon = document.createElement('img');
  const notificationIcon = document.createElement('img');
  const messageIcon = document.createElement('img');
  const profileIcon = document.createElement('img');
  const menuLeftPc = document.createElement('section');
  const homeIconPc = document.createElement('img');
  const menuIconPc = document.createElement('img');
  const notificationIconPc = document.createElement('img');
  const messageIconPc = document.createElement('img');
  const profileIconPc = document.createElement('img');
  // const addBr = document.createElement('br');

  setAttributes(mainPageStructure, mainPageStructureAttributes);
  setAttributes(menuUp, menuUpAttributes);
  setAttributes(petspacePlanet, petspacePlanetAttributes);
  setAttributes(menuUpRight, menuUpRightAttributes);
  setAttributes(shopIcon, shopIconAttributes);
  setAttributes(locationIcon, locationIconAttributes);
  setAttributes(searchIcon, searchIconAttributes);
  setAttributes(homePage, homePageAttributes);
  setAttributes(homePageM, homePageMAttributes);
  setAttributes(menuDown, menuDownAttributes);
  setAttributes(homeIcon, homeIconAttributes);
  setAttributes(menuIcon, menuIconAttributes);
  setAttributes(notificationIcon, notificationIconAttributes);
  setAttributes(messageIcon, messageIconAttributes);
  setAttributes(profileIcon, profileIconAttributes);
  setAttributes(menuLeftPc, menuLeftPcAttributes);
  setAttributes(homeIconPc, homeIconPcAttributes);
  setAttributes(menuIconPc, menuIconPcAttributes);
  setAttributes(notificationIconPc, notificationIconPcAttributes);
  setAttributes(messageIconPc, messageIconPcAttributes);
  setAttributes(profileIconPc, profileIconPcAttributes);

  menuUpRight.append(shopIcon, locationIcon, searchIcon);
  menuUp.append(petspacePlanet, menuUpRight);
  homePage.append(pubBarFunc(), homePageM);
  menuDown.append(homeIcon, menuIcon, notificationIcon, messageIcon, profileIcon);
  menuLeftPc.append(homeIconPc, menuIconPc, notificationIconPc, messageIconPc, profileIconPc);
  mainPageStructure.append(menuUp, homePage, menuDown, menuLeftPc);
  menuIcon.addEventListener('click', () => { onNavigate('/'); });
  // const body = document.querySelector('body');
  //   body.style.background = '#ffff';

  return mainPageStructure;
};
