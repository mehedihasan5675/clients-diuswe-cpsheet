import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../_firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [tableHeadingPropertyNameArr, setTableHeadingPropertyNameArr] =
    useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const providerGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser,'auth state obserbe');
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [reload]);
  useEffect(() => {
    fetch(`https://server-diuswe-cpsheet-sepia.vercel.app/tableheading`)
      .then((res) => res.json())
      .then((data) => {
        const dataarr = data?.result;
        const demoarr = [];
        for (let i = 0; i < dataarr.length; i++) {
          const finalheadingvalue = `_${i + 1}_PName`;
          demoarr.push(finalheadingvalue);
        }
        setTableHeadingPropertyNameArr(demoarr);
      });
  }, [reload]);
  // console.log(tableHeadingPropertyNameArr);
  const authInfo = {
    user,
    loading,
    setLoading,
    reload,
    setReload,
    providerGoogle,
    tableHeadingPropertyNameArr,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
