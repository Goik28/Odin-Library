import { firebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { initAuth, getUserName, isUserSignedIn } from "./auth";

export function myFirebase(){
    initializeApp(firebaseConfig);
    initAuth();
}
