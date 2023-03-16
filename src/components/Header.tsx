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
      <header className="mb-1 pr-2 pl-2 flex justify-between sm:justify-center self-stretch text-center text-base sm:text-xl font-bold bg-neutral-900">
        <div className="m-1 self-center">
          Welcome to your library {userName.split(" ")[0]}
        </div>
        <button
          className="m-2 min-w-fit border-neutral-100 border-2 p-1 rounded-lg hover:bg-neutral-100 hover:text-neutral-900"
          id="sign-in"
          onClick={signOut}
        >
          Log-out
        </button>
      </header>
    );
  } else {
    return (
      <header className="mb-1 self-stretch text-center text-xl font-bold bg-neutral-900">
        <button
          className="m-2 border-neutral-100 border-2 p-1 rounded-lg hover:bg-neutral-100 hover:text-neutral-900"
          id="sign-in"
          onClick={signIn}
        >
          Log-in to your library with Google
        </button>
      </header>
    );
  }
}
