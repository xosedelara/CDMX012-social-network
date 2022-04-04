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

export const addPostCollection = (input) => {
  const user = firebase.auth().currentUser;
  const date = new Date();
  db.collection('posts').add({
    user: user.uid,
    name: user.displayName,
    text: input,
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

export const getPostUser = (postUserId, usernameText, userPic) => {
  const userArray = [];
  db.collection('users').where('user', '==', postUserId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userArray.push(doc.data());
      });
      function uniqueUser(users) {
        return users.filter((e, index) => users.findIndex((a) => a.user === e.user) === index);
      }
      const userDoc = (uniqueUser(userArray))[0];
      usernameText.innerText = userDoc.name;
      userPic.setAttribute('src', userDoc.photo);
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
        createPosts(doc.text, doc.name, user.uid, doc.likes, post.id, doc.user);
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
