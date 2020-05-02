import { firebase, googleAuthProvider } from  '../firebase/firebase'

// startlogin
export const login = (uid) =>({
    type:'LOGIN',
    uid
})

export const  startLogin = () =>{
    return (dispatch) =>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = () =>({
    type:'LOGOUT'
})
// startLogout
export const startLogout = () =>{
    return (dispatch) =>{
        return firebase.auth().signOut();
    }
}