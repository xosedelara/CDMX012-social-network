/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../app.js';

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
    class: 'petspace-planet',
    id: 'petspacePlanet',
    src: 'img/PetSpacePlanet.png',
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

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]));
  };

  const mainPageStructure = document.createElement('div');
  const menuUp = document.createElement('section');
  const petspacePlanet = document.createElement('img');
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
  // const addBr = document.createElement('br');

  setAttributes(mainPageStructure, mainPageStructureAttributes);
  setAttributes(menuUp, menuUpAttributes);
  setAttributes(petspacePlanet, petspacePlanetAttributes);
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

  menuUp.append(petspacePlanet, shopIcon, locationIcon, searchIcon);
  homePage.appendChild(homePageM);
  menuDown.append(homeIcon, menuIcon, notificationIcon, messageIcon, profileIcon);
  mainPageStructure.append(menuUp, homePage, menuDown);
  menuIcon.addEventListener('click', () => { onNavigate('/'); });

  return mainPageStructure;
};
