document.addEventListener("DOMContentLoaded", function() {
    // Example volunteer opportunities data
    const volunteerOpportunities = [
        {
            name: "Community Clean-Up",
            description: "Join us for a community clean-up event in the local park.",
            date: "2024-08-15",
            location: "Local Park"
        },
        {
            name: "Food Bank Assistance",
            description: "Help sort and distribute food at the local food bank.",
            date: "2024-08-20",
            location: "Community Food Bank"
        },
        {
            name: "Senior Center Visit",
            description: "Spend time with seniors and assist with activities at the senior center.",
            date: "2024-08-25",
            location: "Senior Center"
        }
    ];

    // Populate the opportunities list
    const opportunitiesList = document.getElementById("opportunities-list");
    volunteerOpportunities.forEach(opportunity => {
        const opportunityElement = document.createElement("div");
        opportunityElement.className = "opportunity";
        opportunityElement.innerHTML = `
            <h3>${opportunity.name}</h3>
            <p>${opportunity.description}</p>
            <p><strong>Date:</strong> ${opportunity.date}</p>
            <p><strong>Location:</strong> ${opportunity.location}</p>
        `;
        opportunitiesList.appendChild(opportunityElement);
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