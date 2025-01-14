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

// Example data for recycling centers
const updatedRecyclingCenters = [
    {
        name: "New Recycling Center 1",
        address: "Nearby Address 1",
        materials: "Paper, Plastic",
        contact: "123-111-2222",
        email: "center1@example.com",
        website: "https://example1.com",
    },
    {
        name: "New Recycling Center 2",
        address: "Nearby Address 2",
        materials: "Glass, Electronics",
        contact: "123-333-4444",
        email: "center2@example.com",
        website: "https://example2.com",
    },
];

// Function to display the recycling centers list
function displayRecyclingCentersList(centers) {
    const listContainer = document.getElementById("recyclingCentersList");
    listContainer.innerHTML = ""; 

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

// Initialize the list display
displayRecyclingCentersList(updatedRecyclingCenters);

   
   

   
                   
        

