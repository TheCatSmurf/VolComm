document.addEventListener("DOMContentLoaded", function() {
    // Example events data
    const events = [
        {
            name: "Charity Run",
            description: "Participate in our charity run to raise funds for local schools.",
            date: "2024-09-10",
            location: "City Park"
        },
        {
            name: "Blood Donation Camp",
            description: "Join us for a blood donation camp and save lives.",
            date: "2024-09-20",
            location: "Community Center"
        },
        {
            name: "Tree Planting",
            description: "Help us plant trees in the community park.",
            date: "2024-09-25",
            location: "Greenwood Park"
        }
    ];

    // Populate the events list
    const eventsList = document.getElementById("events-list");
    events.forEach(event => {
        const eventElement = document.createElement("div");
        eventElement.className = "event";
        eventElement.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.description}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
        `;
        eventsList.appendChild(eventElement);
    });

    // Handle navigation link updates based on login status
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("login-link").style.display = "none";
        document.getElementById("register-link").style.display = "none";
        const profileLink = document.createElement("li");
        profileLink.innerHTML = '<a href="profile.html" id="profile-link">Profile</a>';
        document.getElementById("nav-links").appendChild(profileLink);
    } else {
        document.getElementById("login-link").style.display = "inline";
        document.getElementById("register-link").style.display = "inline";
    }
});

// Example user data
const user = {
    isLoggedIn: true,
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