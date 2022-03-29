import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {login} from "../features/userSlice"
import {auth} from "./firebase"
import "./Login.css"

function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [profilePicture,setProfilePicture] = useState("");
    const dispatch= useDispatch();


const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth) =>{
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
        }));
    }).catch(error => alert(error));
};

const register = () =>{
    if (!name) {
        return alert("Please enter your full name");
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
        userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilePicture,
        })
        .then(() => { 
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:name,
                photoUrl: profilePicture
            }))
        })
    }).catch((error) => alert(error));
};

  return (
    <div className= "login">
        <img
         src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
          alt="bannerLogo" />

        <form>
            <input value={name} onChange={(e) =>setName(e.target.value)} type="text" placeholder=" Full Name (required)" />
            <input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder=" Your e-mail (required)" />
            <input value={password} onChange={(e) =>setPassword(e.target.value)} type="text" placeholder="Profile pic URL (optional)" />            
            <input value={profilePicture} onChange={(e) =>setProfilePicture(e.target.value)} type="text" placeholder="Enter your password" />
            <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>
        <p>New to LinkedIn? {""} <span class="login__register" onClick={register}>Join Now</span></p>
    </div>
  )
}

export default Login