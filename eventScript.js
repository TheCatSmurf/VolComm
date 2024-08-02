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