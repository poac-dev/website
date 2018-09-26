// We need to import the CSS/SCSS so that webpack will load it.
// The ExtractTextPlugin is used to separate it out into
//  its own CSS/SCSS file.
import css from "../css/app.css";
import scss from "../scss/app.scss";

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html";

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import firebase from "firebase";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBx9dmh29ijScaFd654_LRFUX1TrSDHyPQ",
    authDomain: "poac-pm.firebaseapp.com",
    databaseURL: "https://poac-pm.firebaseio.com",
    projectId: "poac-pm",
    storageBucket: "poac-pm.appspot.com",
    messagingSenderId: "1061286038669"
};
firebase.initializeApp(config);

import Elm from "../elm/Main.elm";

// const elmDiv = ;
const app = Elm.Main.embed(
    document.getElementById("elm"),
    Math.floor(Math.random()*0x0FFFFFFF)
);

// app.ports.firstSeed.send(Math.floor(Math.random()*0x0FFFFFFF));
app.ports.selectMeta.send(document.querySelector("meta[name=csrf]").content);



function githubAuth() {
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('public_repo,read:org');
    firebase.auth().signInWithRedirect(provider).then(function(result) {
        if (result.credential) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = result.credential.accessToken;
            // ...
        }
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user);
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

app.ports.githubAuth.subscribe(function() {
    githubAuth();
});
