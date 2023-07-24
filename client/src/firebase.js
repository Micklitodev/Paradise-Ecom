// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwPpi8YVw9jfJ5oTIcb8pKGXGEzP1oax8",
  authDomain: "paradise-hemp-imgbucket.firebaseapp.com",
  databaseURL: "https://paradise-hemp-imgbucket-default-rtdb.firebaseio.com",
  projectId: "paradise-hemp-imgbucket",
  storageBucket: "paradise-hemp-imgbucket.appspot.com",
  messagingSenderId: "224439582538",
  appId: "1:224439582538:web:e6604abb40b81067574bb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
