/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { onNavigate } from '../app.js';
import { accessPosts } from './readFirestore.js';

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
  })
    .then(() => {
      onNavigate('/mainPage');
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

export const editPost = (userId, docId, postArea, text) => {
  const docRef = db.collection('posts').doc(docId);
  if (text.includes(userId)) {
    docRef.update({
      text: firebase.firestore.FieldValue.arrayRemove(userId),
    });
  } else {
    docRef.update({
      text: firebase.firestore.FieldValue.arrayUnion(userId),
    });
  }
  postArea.innerHTML = '';
  accessPosts(postArea);
  // db.collection('posts').doc(postId)
  //   .onUpdate(async (change, context) => {
  //     const setContext = context.params.postId;
  //     const setText = context.params.text;
  //     const before = change.before.val();
  //     const after = change.after.val();
  //     if (before.text === after.text) {
  //       return null;
  //     }
  //     const snapshot = await admin.firestore()
  //         .collection("reviews")
  //         .where('userName', '==', previousValue.userName)
  //         .get();
  //     const newText = text;
  //     return change.after.ref.update({ newText });
  //   });
};
// export const editPost = (postId, input, postArea) => {
//   db.collection('posts').doc(postId)
//     // .onSnapshot((doc) => {
//     //   const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
//     //   console.log(source, ' data: ', doc.data());
//     //   // console.log('Current data: ', doc.data());
//     // });
//     .onUpdate(change, context) => {

//     }
//     .onUpdate(handler: (change: Change<QueryDocumentSnapshot>, context: EventContext) => any): CloudFunction<Change<QueryDocumentSnapshot>>

// };

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
