/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createPosts } from '../components/posts.js';

/* const getId = (doc) => {
  const db = firebase.firestore();
  const ref = db.collection('posts').doc(doc);
  return ref.update({
    id: doc,
  })
    .then(() => {
      // console.log('Document successfully updated!');
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
}; */

/* export const addId = () => {
  const db = firebase.firestore();
  db.collection('posts').where('id', '==', '')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getId(doc.id);
      });
    });
}; */

export const addPostCollection = (input, photoURL) => {
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;
  // const docRefId = db.collection('posts').doc();
  const date = new Date();
  db.collection('posts').add({
    user: user.uid,
    // idd: docRefId.id,
    // id: '',
    name: user.displayName,
    text: input,
    photo: photoURL,
    date: `${date.getHours()}${':'}${date.getMinutes()} ${date.getDate()}${'/'}${date.getMonth() + 1}${'/'}${date.getFullYear()}`,
    time: firebase.firestore.Timestamp.now(),
    likes: 0,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  // addId();
};

export const accessPosts = (postArea) => {
  const db = firebase.firestore();
  const postArray = [];
  db.collection('posts').orderBy('time', 'desc')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        postArray.push(doc);
      });
      function unique(posts) {
        return posts.filter((e, index) => posts.findIndex((a) => a.idd === e.idd) === index);
      }
      const filteredPosts = unique(postArray);
      postArea.innerHTML = '';
      filteredPosts.forEach((post) => {
        createPosts(post.data().text, post.data().name, post.data().likes, post.data().photo, post.id);
      });
    });
};

export const editPost = (postId) => {
  // para modificar el doc de la colección en firestore
  console.log(postId);
};

export const deletePost = (postId) => {
  const db = firebase.firestore();
  db.collection('posts').doc(postId).delete().then(() => {
    console.log('¡Has borrado esta publicación!');
  })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

export const accessLikes = (count, docId) => {
  const db = firebase.firestore();
  const docRef = db.collection('posts').doc(docId);
  console.log(docId);
  return docRef.update({
    likes: count,
  })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};
