import { getAuth, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { signingIn, signingOut } from "./actions";

export function Header({
  setSignedUser,
}: {
  setSignedUser: React.Dispatch<React.SetStateAction<User | null>>;
}) {
  const [userName, setUserName] = useState("");
  const [logged, setLogged] = useState(false);

  async function signIn() {
    await signingIn();
  }

  function signOut() {
    signingOut();    
  }

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        setSignedUser(user);
        setUserName(user.displayName as string);
        setLogged(true);
      } else {
        setUserName("");
        setSignedUser(null);
        setLogged(false);
      }
    });
  }, []);

  if (logged) {
    return (
      <header id="user-container">
        <div id="user-name">
          Welcome {userName.split(" ")[0]} to your library:
        </div>
        <button id="sign-out" onClick={signOut}>
          Sign-out
        </button>
      </header>
    );
  } else {
    return (
      <header id="user-container">
        <button id="sign-in" onClick={signIn}>
          Sign-in to your library with Google
        </button>
      </header>
    );
  }
}
