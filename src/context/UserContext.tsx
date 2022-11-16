/* eslint-disable react/jsx-no-constructed-context-values */
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase-config';

type UserProps = {
  children: ReactNode;
};

type ListContext = {
  googleSignIn: () => void;
  googleSignOut: () => void;
  user: UserObject;
};

type UserObject = {
  name: string;
};

const UserContext = createContext({} as ListContext);

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }: UserProps) {
  const [user, setUser] = useState<UserObject>({ name: '' });

  const googleSignIn = () => {
    signInWithPopup(auth, provider);
  };

  const googleSignOut = () => {
    signOut(auth);
  };

  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, (grabbedUser) => {
  //     if (grabbedUser?.displayName) setUser({ name: grabbedUser.displayName });
  //     console.log('yooo', grabbedUser);
  //   });
  //   return unsub();
  // }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (grabbedUser) => {
      if (grabbedUser) {
        if (grabbedUser.displayName) setUser({ name: grabbedUser.displayName });
      } else {
        setUser({ name: '' });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ googleSignIn, googleSignOut, user }}>
      {children}
    </UserContext.Provider>
  );
}
