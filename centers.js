let map;
let markers = [];
let recyclingCenters = [
    { name: "Eco Center A", address: "123 Greenway Blvd", materials: "Plastic, Metal, Glass", lat: 37.7749, lng: -122.4194 },
    { name: "Recycle Hub B", address: "456 Green St", materials: "Paper, Cardboard", lat: 37.7849, lng: -122.4094 },
    { name: "Green Earth C", address: "789 Blue Ave", materials: "Electronics, Batteries", lat: 37.7649, lng: -122.4294 },
];

function initMap() {
    // Initialize map centered at default location
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
    });

    // Add initial markers
    updateMarkers(recyclingCenters);
}

function updateMarkers(centers) {
    // Clear old markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    // Add new markers
    centers.forEach(center => {
        const marker = new google.maps.Marker({
            position: { lat: center.lat, lng: center.lng },
            map,
            title: center.name,
        });

        // Info window on click
        const infoWindow = new google.maps.InfoWindow({
            content: `<h4>${center.name}</h4><p>${center.address}</p><p><strong>Materials:</strong> ${center.materials}</p>`,
        });
        marker.addListener("click", () => infoWindow.open(map, marker));

        markers.push(marker);
    });

    // Update list
    updateList(centers);
}

function updateList(centers) {
    const listContainer = document.getElementById("recyclingCentersList");
    listContainer.innerHTML = ""; // Clear previous list

    centers.forEach(center => {
        const item = document.createElement("div");
        item.className = "list-item";
        item.innerHTML = `
            <h4>${center.name}</h4>
            <p>${center.address}</p>
            <p><strong>Materials:</strong> ${center.materials}</p>
        `;
        listContainer.appendChild(item);
    });
}

function searchLocation() {
    const query = document.getElementById("locationInput").value.toLowerCase();
    const filteredCenters = recyclingCenters.filter(center =>
        center.name.toLowerCase().includes(query) ||
        center.address.toLowerCase().includes(query)
    );
    updateMarkers(filteredCenters);
}
