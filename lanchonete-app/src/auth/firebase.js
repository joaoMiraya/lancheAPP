import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
    apiKey: "AIzaSyCygWVQ0t_e8ZwdFstYthMsthQYLNQWvns",
    authDomain: "chps-database.firebaseapp.com",
    projectId: "chps-database",
    storageBucket: "chps-database.appspot.com",
    messagingSenderId: "87535699424",
    appId: "1:87535699424:web:feaa50a1bb9d8b0c255785",
    measurementId: "G-FSPHEWV818"
};
export const app = initializeApp(firebaseConfig);
