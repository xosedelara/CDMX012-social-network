/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createPosts } from '../components/posts.js';

const db = firebase.firestore();

export const addUserCollection = (user) => {
  let photoURL = user.photoURL;
  if (photoURL === null || photoURL === undefined) {
    photoURL = './img/cuteplanet.webp';
  } else {
    photoURL = user.photoURL;
  }
  db.collection('users').add({
    user: user.uid,
    name: user.displayName,
    photo: photoURL,
  });
};

export const addPostCollection = (input, photoURL) => {
  const user = firebase.auth().currentUser;
  const date = new Date();
  db.collection('posts').add({
    user: user.uid,
    name: user.displayName,
    text: input,
    photo: photoURL,
    date: `${date.getHours()}${':'}${date.getMinutes()} ${date.getDate()}${'/'}${date.getMonth() + 1}${'/'}${date.getFullYear()}`,
    time: firebase.firestore.Timestamp.now(),
    likes: [],
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const getUserInfo = (postUser) => {
  const userArray = [];
  db.collection('users').where('user', '==', postUser)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userArray.push(doc.data());
      });
      function uniqueUser(users) {
        return users.filter((e, index) => users.findIndex((a) => a.user === e.user) === index);
      }
      const userDoc = (uniqueUser(userArray))[0];
      console.log(userDoc.name);
      return userDoc.name;
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};

export const accessPosts = (postArea) => {
  const postArray = [];
  db.collection('posts').orderBy('time', 'desc')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        postArray.push(doc);
      });
      function unique(posts) {
        return posts.filter((e, index) => posts.findIndex((a) => a.id === e.id) === index);
      }
      const filteredPosts = unique(postArray);
      postArea.innerHTML = '';
      filteredPosts.forEach((post) => {
        const doc = post.data();
        const user = firebase.auth().currentUser;
        getUserInfo(doc.user);
        createPosts(doc.text, doc.name, user.uid, doc.likes, doc.photo, post.id, doc.user);
      });
    });
};

export const editPost = (postId) => {
  // para modificar el doc de la colección en firestore
  console.log(postId);
};

export const deletePost = (postId, postArea) => {
  db.collection('posts').doc(postId).delete().then(() => {
    console.log('¡Has borrado esta publicación!');
    postArea.innerHTML = '';
    accessPosts(postArea);
  })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

export const addLikes = (docId, userId, postArea, likes) => {
  const docRef = db.collection('posts').doc(docId);
  if (likes.includes(userId)) {
    docRef.update({
      likes: firebase.firestore.FieldValue.arrayRemove(userId),
    });
  } else {
    docRef.update({
      likes: firebase.firestore.FieldValue.arrayUnion(userId),
    });
  }
  postArea.innerHTML = '';
  accessPosts(postArea);
};
