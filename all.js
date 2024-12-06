
// const firebaseConfig = {
//     apiKey: "AIzaSyC-mGYD15Kj6F2PKklkhBVpI_BpdYZ95fo",
//     authDomain: "blog-app-68ac9.firebaseapp.com",
//     projectId: "blog-app-68ac9",
//     storageBucket: "blog-app-68ac9.firebasestorage.app",
//     messagingSenderId: "902750854561",
//     appId: "1:902750854561:web:69b4b3ab2c2bf062f6bfe0",
//     measurementId: "G-K5MQ172QPE"
//   };
// firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore();

// let username = "";

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         username = user.email.slice(0, -10); // Store the username
//         document.getElementById("headerName").innerText = username;
//     } else {
//         document.querySelector(".log").innerText = "Login"
//         document.querySelector(".log").addEventListener('click', () => {
//             window.location.href = "./login.html"
//         })
//     }
// });

// function renderPostsUser() {
//     let container = document.querySelector(".resultDash");
//     container.innerHTML = "";
//     db.collection("posts")
//         .orderBy("timestamp", "desc")
//         .get()
//         .then((querySnapshot) => {
//             if (querySnapshot.empty) {
//                 container.innerHTML = "<h1 class='font'>No Posts Found</h1>";
//             } else {
//                 querySnapshot.forEach(function(doc) {
//                     var data = doc.data();

//                     var timestamp = data.timestamp ? data.timestamp.toDate() : new Date();
//                     let post = document.createElement("div");
//                     post.className += " column renderPost";

//                     let row = document.createElement("div");
//                     row.className += " row";
//                     post.appendChild(row);

//                     let image = document.createElement("img");
//                     image.className += "userImg"
//                     image.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

//                     let postEmail = data.user

//                     db.collection("users").get()
//                         .then((querySnapshot) => {
//                             querySnapshot.forEach((doc) => {
//                                 let data = doc.data()
//                                 if (data.email === postEmail) {
//                                     // console.log("match")
//                                     image.src = data.photo
//                                 }
//                             });
//                         })
//                         .catch((error) => {
//                             console.error("Error querying Firestore:", error);
//                         });

//                     row.appendChild(image);

//                     let div = document.createElement("div")
//                     div.className += " col"
//                     div.style.marginLeft = "1em"
//                     row.appendChild(div);

//                     let title = document.createElement("p");
//                     title.className += " title";
//                     title.style.fontSize = "1.5em";
//                     title.style.fontWeight = "bold";
//                     title.innerText = data.title; // Render the title
//                     div.appendChild(title);

//                     let text = document.createElement("p");
//                     text.className += " text";
//                     text.style.fontSize = "1em"
//                     text.style.fontWeight = "bolder"
//                     text.innerText = data.post;
//                     post.appendChild(text);

//                     let tim = document.createElement("div")
//                     tim.className += " row gap"
//                     tim.style.rowGap = "0em"
//                     div.appendChild(tim)

//                     // console.log(postEmail)

//                     let name = document.createElement("p");
//                     name.className += " userMail";

//                     {
//                         db.collection("users")
//                             .get()
//                             .then((querySnapshot) => {
//                                 {
//                                     querySnapshot.forEach(function(doc) {
//                                         var data = doc.data();

//                                         if (data.email === postEmail) {
//                                             // console.log("founded")
//                                             name.innerText = `${data.firstName}  ${data.lastName} |`;
//                                             document.getElementById("headerName").innerText = `${data.firstName}  ${data.lastName}`;
//                                             // document.getElementById("name").innerText = `${data.firstName}  ${data.lastName}`;
//                                         } else {
//                                             // console.log("not found")
//                                         }

//                                     })
//                                 }
//                             })
//                             .catch((error) => {
//                                 console.error("Error getting posts: ", error);
//                             });
//                     }

//                     tim.appendChild(name);

//                     let time = document.createElement("p");
//                     time.className += " postTime";
//                     time.innerText = `| ${moment(timestamp).format("ll")}`;
//                     tim.appendChild(time);

//                     let cont = document.createElement("a");
//                     cont.className += " anchor";
//                     cont.style.color = "#0079ff";
//                     cont.innerText = "see all from this user";
//                     cont.href = './user.html'
//                     cont.name = `${postEmail}`
//                         // console.log(cont.name)
//                     cont.style.gap = "1em"
//                     cont.style.padding = "1em"
//                     cont.addEventListener("click", (event) => {
//                         let mail = event.target.name;
//                         // console.log(mail)
//                         localStorage.setItem("userMail", mail)
//                     })

//                     post.appendChild(cont);

//                     container.appendChild(post);

//                 });
//             }
//         })
//         .catch((error) => {
//             console.error("Error getting posts: ", error);
//         });
// }


// function logOut() {
//     firebase
//         .auth()
//         .signOut()
//         .then(() => {
//             // console.log("Sign out successful");
//             window.location.href = "./index.html";
//         })
//         .catch((error) => {
//             console.log("Sign out error:", error);
//         });
// }

// document.addEventListener("DOMContentLoaded", function() {
//     renderPostsUser();
// });

// let day = document.querySelector("#good")

// function getGreeting() {
//     const currentTime = new Date();
//     const currentHour = currentTime.getHours();

//     let greeting;

//     if (currentHour < 12) {
//         greeting = 'Good morning';
//     } else if (currentHour < 18) {
//         greeting = 'Good afternoon';
//     } else {
//         greeting = 'Good evening';
//     }

//     return greeting;
// }

// const greeting = getGreeting();
// day.innerText = greeting + " !"
// // document.querySelectorAll('.category-btn').forEach(button => {
// //     button.addEventListener('click', function() {
// //         let category = button.dataset.category;
// //         renderPostsByCategory(category);
// //     });
// // });

// // function renderPostsByCategory(category) {
// //     let container = document.querySelector(".resultDash");
// //     container.innerHTML = "";
    
// //     db.collection("posts")
// //         .where("category", "==", category)
// //         .orderBy("timestamp", "desc")
// //         .get()
// //         .then((querySnapshot) => {
// //             if (querySnapshot.empty) {
// //                 container.innerHTML = "<h1 class='font'>No Posts Found</h1>";
// //             } else {
// //                 querySnapshot.forEach(function(doc) {
// //                     let data = doc.data();
// //                     renderPost(data);
// //                 });
// //             }
// //         })
// //         .catch((error) => {
// //             console.error("Error getting posts: ", error);
// //         });
// // }
// // Function to render all posts initially
// function renderAllPosts() {
//     let container = document.querySelector(".resultDash");
//     container.innerHTML = "";
    
//     db.collection("posts")
//         .orderBy("timestamp", "desc")
//         .get()
//         .then((querySnapshot) => {
//             if (querySnapshot.empty) {
//                 container.innerHTML = "<h1 class='font'>No Posts Found</h1>";
//             } else {
//                 querySnapshot.forEach(function(doc) {
//                     let data = doc.data();
//                     renderPost(data); // Function to render a single post (you already have this)
//                 });
//             }
//         })
//         .catch((error) => {
//             console.error("Error getting posts: ", error);
//         });
// }

// // Function to render posts filtered by category
// function renderPostsByCategory(category) {
//     let container = document.querySelector(".resultDash");
//     container.innerHTML = "";
    
//     db.collection("posts")
//         .where("category", "==", category)
//         .orderBy("timestamp", "desc")
//         .get()
//         .then((querySnapshot) => {
//             if (querySnapshot.empty) {
//                 container.innerHTML = "<h1 class='font'>No Posts Found</h1>";
//             } else {
//                 querySnapshot.forEach(function(doc) {
//                     let data = doc.data();
//                     renderPost(data); // Function to render a single post (you already have this)
//                 });
//             }
//         })
//         .catch((error) => {
//             console.error("Error getting posts: ", error);
//         });
// }

// // Attach event listeners to category buttons
// document.querySelectorAll(".category-btn").forEach((button) => {
//     button.addEventListener("click", function() {
//         const category = button.getAttribute("data-category");
//         renderPostsByCategory(category); // Call the function to filter posts by category
//     });
// });

// // Initially render all posts
// document.addEventListener("DOMContentLoaded", function() {
//     renderAllPosts();
// });
const firebaseConfig = {
    apiKey: "AIzaSyC-mGYD15Kj6F2PKklkhBVpI_BpdYZ95fo",
    authDomain: "blog-app-68ac9.firebaseapp.com",
    projectId: "blog-app-68ac9",
    storageBucket: "blog-app-68ac9.firebasestorage.app",
    messagingSenderId: "902750854561",
    appId: "1:902750854561:web:69b4b3ab2c2bf062f6bfe0",
    measurementId: "G-K5MQ172QPE"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

let username = "";

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        username = user.email.slice(0, -10); // Store the username
        document.getElementById("headerName").innerText = username;
    } else {
        document.querySelector(".log").innerText = "Login";
        document.querySelector(".log").addEventListener('click', () => {
            window.location.href = "./login.html";
        });
    }
});

function renderPost(data) {
    var timestamp = data.timestamp ? data.timestamp.toDate() : new Date();
    let post = document.createElement("div");
    post.className += " column renderPost";

    let row = document.createElement("div");
    row.className += " row";
    post.appendChild(row);

    let image = document.createElement("img");
    image.className += "userImg";
    image.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    let postEmail = data.user;

    db.collection("users").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let userData = doc.data();
                if (userData.email === postEmail) {
                    image.src = userData.photo;
                }
            });
        })
        .catch((error) => {
            console.error("Error querying Firestore:", error);
        });

    row.appendChild(image);

    let div = document.createElement("div");
    div.className += " col";
    div.style.marginLeft = "1em";
    row.appendChild(div);

    let title = document.createElement("p");
    title.className += " title";
    title.style.fontSize = "1.5em";
    title.style.fontWeight = "bold";
    title.innerText = data.title;
    div.appendChild(title);

    let text = document.createElement("p");
    text.className += " text";
    text.style.fontSize = "1em";
    text.style.fontWeight = "bolder";
    text.innerText = data.post;
    post.appendChild(text);

    let tim = document.createElement("div");
    tim.className += " row gap";
    tim.style.rowGap = "0em";
    div.appendChild(tim);

    let name = document.createElement("p");
    name.className += " userMail";

    db.collection("users")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach(function(doc) {
                var userData = doc.data();

                if (userData.email === postEmail) {
                    name.innerText = `${userData.firstName}  ${userData.lastName} |`;
                }
            });
        })
        .catch((error) => {
            console.error("Error getting posts: ", error);
        });

    tim.appendChild(name);

    let time = document.createElement("p");
    time.className += " postTime";
    time.innerText = `| ${moment(timestamp).format("ll")}`;
    tim.appendChild(time);

    let cont = document.createElement("a");
    cont.className += " anchor";
    cont.style.color = "#0079ff";
    cont.innerText = "see all from this user";
    cont.href = './user.html';
    cont.name = `${postEmail}`;
    cont.style.gap = "1em";
    cont.style.padding = "1em";
    cont.addEventListener("click", (event) => {
        let mail = event.target.name;
        localStorage.setItem("userMail", mail);
    });

    post.appendChild(cont);

    return post;
}

function renderAllPosts() {
    let container = document.querySelector(".resultDash");
    container.innerHTML = "";

    db.collection("posts")
        .orderBy("timestamp", "desc")
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                container.innerHTML = "<h1 class='font'>No Posts Found</h1>";
            } else {
                querySnapshot.forEach(function(doc) {
                    let data = doc.data();
                    let post = renderPost(data); // Use renderPost function
                    container.appendChild(post);
                });
            }
        })
        .catch((error) => {
            console.error("Error getting posts: ", error);
        });
}

function renderPostsByCategory(category) {
    let container = document.querySelector(".resultDash");
    container.innerHTML = "";

    db.collection("posts")
        .where("category", "==", category)
        .orderBy("timestamp", "desc")
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                container.innerHTML = "<h1 class='font'>No Posts Found</h1>";
            } else {
                querySnapshot.forEach(function(doc) {
                    let data = doc.data();
                    let post = renderPost(data); // Use renderPost function
                    container.appendChild(post);
                });
            }
        })
        .catch((error) => {
            console.error("Error getting posts: ", error);
        });
}

// Attach event listeners to category buttons
document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", function() {
        const category = button.getAttribute("data-category");
        renderPostsByCategory(category); // Call the function to filter posts by category
    });
});

// Initially render all posts
document.addEventListener("DOMContentLoaded", function() {
    renderAllPosts();
});

// Logout function
function logOut() {
    firebase
        .auth()
        .signOut()
        .then(() => {
            .location.href = "./index.html";
        })
        .catch((error) => {
            console.log("Sign out error:", error);
        });
}

// Greeting function
let day = document.querySelector("#good");

function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    return greeting;
}

const greeting = getGreeting();
day.innerText = greeting + " !";

// Function to render posts for a user
function renderPostsUser() {
    let container = document.querySelector(".resultDash");
    container.innerHTML = "";
    db.collection("posts")
        .orderBy("timestamp", "desc")
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                container.innerHTML = "<h1 class='font'>No Posts Found</h1>";
            } else {
                querySnapshot.forEach(function(doc) {
                    let data = doc.data();
                    let post = renderPost(data); // Use renderPost function
                    container.appendChild(post);
                });
            }
        })
        .catch((error) => {
            console.error("Error getting posts: ", error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    renderPostsUser();
});
