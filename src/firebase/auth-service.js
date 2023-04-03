import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import {auth} from "./firebase-config";


export function registration(email, password, nickname) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(response => {
            console.log(response.operationType)

        }).then(() => {
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                displayName: nickname
            }).catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
        }
    ).catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

export function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then(response => console.log(response))
        .catch(e => console.log(e))
}

export function logout() {
    signOut(auth)
        .then(response => console.log(response))
        .catch(e => console.log(e))
}