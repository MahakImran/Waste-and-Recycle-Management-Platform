const pickups = [
    { date: "2024-12-01", materials: "Plastic, Glass", location: "123 Main Street, City", status: "Completed" },
    { date: "2024-12-05", materials: "Paper, Metal", location: "456 Abc Street, City", status: "Pending" },
    { date: "2024-12-10", materials: "Electronics", location: "789 Xyz Street, City", status: "Completed" }
];

const populatePickups = () => {
    const pickupHistory = document.getElementById("pickupHistory");
    pickups.forEach(pickup => {
        const pickupItem = document.createElement("div");
        pickupItem.classList.add("pickup-item");
        pickupItem.innerHTML = `
            <p><strong>Date:</strong> ${pickup.date}</p>
            <p><strong>Materials:</strong> ${pickup.materials}</p>
            <p><strong>Location:</strong> ${pickup.location}</p>
            <p><strong>Status:</strong> ${pickup.status}</p>
        `;
        pickupHistory.appendChild(pickupItem);
    });
};

const logout = () => alert("You have been logged out.");

document.addEventListener("DOMContentLoaded", populatePickups);
