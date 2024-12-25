import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        return signOut(auth)
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateProfileUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
       setUser,
        createUser,
         logout,
          loginUser,
           loading,
            updateProfileUser,
             googleLogin
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser);
            }else{
                setUser(null); 
            }
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    }, [])
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;