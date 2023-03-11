import { initializeApp } from "@firebase/app";
import { UserCredential } from "@firebase/auth";
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

export async function retrieveLibrary(
  signedUser: UserCredential
): Promise<Library | null> {
  try {
    const libraryRef = doc(collection(db, "libraries"), signedUser.user.uid);
    const result = await getDoc(libraryRef);
    if (result.exists()) {
      return result.data() as Library;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null
  }
}

export async function saveLibrary(
  signedUser: UserCredential,
  library: Library
) {
  const libraryRef = doc(collection(db, "libraries"), signedUser?.user.uid);
  // Saves library to Cloud Firestore.
  try {
    await setDoc(libraryRef, library);
  } catch (error) {
    console.error("Error writing library to Firebase Database", error);
  }
}
