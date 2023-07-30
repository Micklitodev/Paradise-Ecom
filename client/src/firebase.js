import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const fbapi = process.env.REACT_APP_FB_API;
const fbdomain = process.env.REACT_APP_FB_DOMAIN;
const fburl = process.env.REACT_APP_FB_URL;
const fbpid = process.env.REACT_APP_FB_PID;
const fbsb = process.env.REACT_APP_FB_SB;
const fbms = process.env.REACT_APP_FB_MS;
const fbaid = process.env.REACT_APP_FB_AID;

const firebaseConfig = {
  apiKey: fbapi,
  authDomain: fbdomain,
  databaseURL: fburl,
  projectId: fbpid,
  storageBucket: fbsb,
  messagingSenderId: fbms,
  appId: fbaid,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
