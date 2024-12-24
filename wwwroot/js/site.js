document.getElementById('seeMoreBtn').addEventListener('click', function () {
    let hiddenItems = document.querySelectorAll('.issue.hidden');
    hiddenItems.forEach(function (item) {
        item.style.display = 'block';
    });
    this.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');

    // Automatically flip the card to the back side after 1.5 seconds
    setTimeout(() => {
        card.classList.add('is-flipped');
    }, 1500);

    // Add click event to flip the card back and forth
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});
/*---------------------------------recycling center---------------------------------------*/
let map;
let markers = [];
let geocoder;

function initMap() {
    const initialLocation = { lat: 40.7128, lng: -74.0060 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: initialLocation,
        zoom: 12,
    });

    geocoder = new google.maps.Geocoder();

    // Example data for recycling centers
    const recyclingCenters = [
        {
            name: "Recycling Center A",
            address: "123 Main St, City, State, Zip",
            materials: "Plastic, Paper, Glass",
            contact: "123-456-7890",
            email: "example@recyclingcenter.com",
            website: "http://www.recyclingcenter.com",
            lat: 40.7128,
            lng: -74.0060
        },
        {
            name: "Recycling Center B",
            address: "456 Another St, Another City, State, Zip",
            materials: "Metals, Electronics",
            contact: "987-654-3210",
            email: "info@anothercenter.com",
            website: "http://www.anothercenter.com",
            lat: 34.0522,
            lng: -118.2437
        },
    ];

    addRecyclingCentersToMap(recyclingCenters);
    displayRecyclingCentersList(recyclingCenters);
}

// Function to add recycling centers as map pins
function addRecyclingCentersToMap(centers) {
    markers.forEach((marker) => marker.setMap(null)); // Clear existing markers
    markers = [];

    centers.forEach((center) => {
        const marker = new google.maps.Marker({
            position: center.location,
            map: map,
            title: center.name,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <h3>${center.name}</h3>
                <p><strong>Address:</strong> ${center.address}</p>
                <p><strong>Materials Accepted:</strong> ${center.materials}</p>
            `,
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });

        markers.push(marker);
    });
}

// Function to display the recycling centers list
function displayRecyclingCentersList(centers) {
    const listContainer = document.getElementById("recyclingCentersList");
    listContainer.innerHTML = ""; // Clear any existing content

    centers.forEach((center) => {
        const listItem = document.createElement("div");
        listItem.className = "list-item";

        listItem.innerHTML = `
            <h3 class="center-name">${center.name}</h3>
            <p class="center-address"><strong>Address:</strong> ${center.address}</p>
            <p class="center-materials"><strong>Materials Accepted:</strong> ${center.materials}</p>
            <p class="center-contact"><strong>Contact No.:</strong> ${center.contact}</p>
            <p class="center-email"><strong>Email:</strong> <a href="mailto:${center.email}">${center.email}</a></p>
            <p class="center-website"><strong>Website:</strong> <a href="${center.website}" target="_blank">${center.website}</a></p>
        `;

        listContainer.appendChild(listItem);
    });
}

// Function to handle location search
function searchLocation() {
    const locationInput = document.getElementById("locationInput").value;

    if (!locationInput) {
        alert("Please enter a location!");
        return;
    }

    geocoder.geocode({ address: locationInput }, (results, status) => {
        if (status === "OK") {
            const location = results[0].geometry.location;
            map.setCenter(location);
            map.setZoom(14);

            // Example: Update the recycling centers dynamically based on the searched location
            const updatedRecyclingCenters = [
                {
                    name: "New Recycling Center 1",
                    address: "Nearby Address 1",
                    materials: "Paper, Plastic",
                    contact: "123-111-2222",
                    email: "center1@example.com",
                    website: "https://example1.com",
                    location: { lat: location.lat() + 0.01, lng: location.lng() + 0.01 },
                },
                {
                    name: "New Recycling Center 2",
                    address: "Nearby Address 2",
                    materials: "Glass, Electronics",
                    contact: "123-333-4444",
                    email: "center2@example.com",
                    website: "https://example2.com",
                    location: { lat: location.lat() - 0.01, lng: location.lng() - 0.01 },
                },
            ];

            addRecyclingCentersToMap(updatedRecyclingCenters);
            displayRecyclingCentersList(updatedRecyclingCenters);
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}
