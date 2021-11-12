import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";




//initialize firebase
initializeFirebase();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false)

    const history = useHistory()

    const createUser = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name }
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setError('');
                }).catch((error) => {
                    setError(error.message);
                });
            })
            .catch((error) => {
                setError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    const logInUSer = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //observe state

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);

    useEffect(() => {
        fetch(`https://fierce-garden-19986.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])

    const logOut = () => {
        signOut(auth).then(() => {
            history.push('/')
        }).catch((error) => {

        });
    }


    return {
        createUser,
        user,
        admin,
        error,
        isLoading,
        logOut,
        logInUSer

    }
}

export default useFirebase;