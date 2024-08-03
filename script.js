document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("login-link").style.display = "none";
        document.getElementById("register-link").style.display = "none";
        document.getElementById("profile-link").style.display = "inline";
    } else {
        document.getElementById("login-link").style.display = "inline";
        document.getElementById("register-link").style.display = "inline";
        document.getElementById("profile-link").style.display = "none";
    }
});


// Example user data
const user = {
    isLoggedIn: false,
    name: "Aditya N"
};

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('nav-links');
    const joinUsSection = document.getElementById('join-us-section');
    const heroHeading = document.getElementById('hero-heading');
    const heroParagraph = document.getElementById('hero-paragraph');
    const getStartedButton = document.getElementById('get-started-button'); 
    
    if (user.isLoggedIn) {
        // Hide login and register links
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('register-link').style.display = 'none';

        // Show profile link and logout link
        const userNameItem = document.createElement('li');
        userNameItem.textContent = user.name;

        const profileItem = document.createElement('li');
        const profileLink = document.createElement('a');
        profileLink.href = "profile.html";
        profileLink.textContent = "Profile";
        profileItem.appendChild(profileLink);

        const logoutItem = document.createElement('li');
        const logoutLink = document.createElement('a');
        logoutLink.href = "#";
        logoutLink.textContent = "Logout";
        logoutLink.addEventListener('click', () => {
            // Handle logout logic here
            alert('Logged out');
            // Redirect to the homepage or login page after logout
        });

        logoutItem.appendChild(logoutLink);
        navLinks.appendChild(profileItem);
        navLinks.appendChild(userNameItem);
        navLinks.appendChild(logoutItem);

        // Hide the hero section content and the "Get Involved" section
        heroHeading.style.display = 'none';
        heroParagraph.style.display = 'none';
        getStartedButton.style.display = 'none';
        joinUsSection.style.display = 'none';        
    }
});






document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else {
        alert('Registration successful');
        // You can add further logic here to send the data to the server
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('postsContainer');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            addPost(title, content);
            postForm.reset();
        } else {
            alert('Please fill out all fields');
        }
    });

    function addPost(title, content) {
        const post = document.createElement('div');
        post.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;
        post.appendChild(postTitle);

        const postContent = document.createElement('p');
        postContent.textContent = content;
        post.appendChild(postContent);

        postsContainer.appendChild(post);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
