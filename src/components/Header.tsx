import { initializeApp } from "@firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
  User,
} from "firebase/auth";
import { useState } from "react";
import { firebaseConfig } from "../../firebase-config";

export function Header({
  setSignedUser,
}: {
  setSignedUser: React.Dispatch<React.SetStateAction<UserCredential | null>>;
}) {
  const [userName, setUserName] = useState("");
  const [logged, setLogged] = useState(false);

  async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    initializeApp(firebaseConfig);
    onAuthStateChanged(getAuth(), authStateObserver);
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider).then(
      (result) => {
        setSignedUser(result);
      },
      () => {
        console.log("error login");
      }
    );
  }

  function signOutUser() {
    // Sign out of Firebase.
    signOut(getAuth());
    setSignedUser(null);
  }

  function authStateObserver(user: User | null) {
    if (user) {
      // User is signed in!
      setUserName(user.displayName as string);
      // Show user's profile and sign-out button.
      // Hide sign-in button.
      setLogged(true);
    } else {
      // User is signed out!
      // Hide user's profile and sign-out button.
      // Show sign-in button.
      setUserName("");
      setLogged(false);
    }
  }

  function showPanel() {
    if (logged) {
      return (
        <div id="user-container">
          <div id="user-name">
            Welcome {userName.split(" ")[0]} to your library:
          </div>
          <button id="sign-out" onClick={signOutUser}>
            Sign-out
          </button>
        </div>
      );
    } else {
      return (
        <div id="user-container">
          <button id="sign-in" onClick={signIn}>
            Sign-in to your library with Google
          </button>
        </div>
      );
    }
  }

  return <header>{showPanel()}</header>;
}
