import { initializeApp } from "@firebase/app";
import {
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "@firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "@firebase/firestore";
import { firebaseConfig } from "../../firebase-config";
import { Library } from "./interfaces";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function signingIn() {
  const provider = new GoogleAuthProvider();
  getAuth().setPersistence(browserSessionPersistence);
  try {
    await signInWithPopup(getAuth(), provider);
  } catch (error) {
    console.log(error);
  }
}

export function signingOut() {
  signOut(getAuth());
}

export async function retrieveLibrary(
  signedUser: User
): Promise<Library | null> {
  try {
    const libraryRef = doc(collection(db, "libraries"), signedUser.uid);
    const result = await getDoc(libraryRef);
    if (result.exists()) {
      return result.data() as Library;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function saveLibrary(
  signedUser: User,
  library: Library
): Promise<boolean> {
  const libraryRef = doc(collection(db, "libraries"), signedUser.uid);
  // Saves library to Cloud Firestore.
  try {
    await setDoc(libraryRef, library);
    return true;
  } catch (error) {
    console.error("Error writing library to Firebase Database", error);
    return false;
  }
}
