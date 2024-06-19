document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to the search bar
  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", (event) => {
    showSuggestions(event.target.value);
  });

  // Add event listener to the search form
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchBar.value;
    filterProducts(searchTerm);
  });

  // Close suggestions when clicking outside
  document.addEventListener("click", (event) => {
    const suggestionsContainer = document.getElementById(
      "suggestions-container"
    );
    if (!searchForm.contains(event.target)) {
      suggestionsContainer.style.display = "none";
    }
  });
});

// List of products
const productsList = [
  "Data Logger",
  "Digital Anemometer",
  "Flow Meter",
  "Humidity and Temperature sensors",
  "Humidity Transmitter machine",
  "Input Output Module",
  "Jumbo display",
  "Led Accessories",
  "New Items",
  "Others",
  "Process Controllers",
  "Process Sensors",
  "Product Development Service",
  "Protocol Converter",
  "Pyranometer Sensor",
  "Sensors for Weather Station",
  "Sheet metal enclosures",
  "Solar control unit accessories",
  "Solar sensor light",
  "Solar Tracker",
  "Temperature Sensor",
  "Temperature transmitter",
  "Weather sensors",
  "Weather Station",
  "Weather Station Data Loggers",
];

function showSuggestions(searchTerm) {
  const suggestionsContainer = document.getElementById("suggestions-container");
  suggestionsContainer.innerHTML = "";
  if (searchTerm === "") {
    suggestionsContainer.style.display = "none";
    return;
  }

  const suggestions = productsList.filter((product) =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (suggestions.length > 0) {
    suggestionsContainer.style.display = "block";
    suggestions.forEach((product) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.textContent = product;
      suggestionItem.addEventListener("click", () => {
        const searchBar = document.getElementById("search-bar");
        searchBar.value = product;
        suggestionsContainer.innerHTML = "";
        suggestionsContainer.style.display = "none";
        filterProducts(product); // Show the selected product
      });
      suggestionsContainer.appendChild(suggestionItem);
    });
  } else {
    suggestionsContainer.style.display = "none";
  }
}

function filterProducts(searchTerm) {
  // Assuming allProducts is a list of product objects from your previous API call
  const productsContainer = document.querySelector(".complete-boxes .row");
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  displayProducts(filteredProducts);
}
function toggleDropdown(event) {
  event.preventDefault(); // Prevent the default link behavior
  const dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".nav-link")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
// Function to open the modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("error-message").style.display = "none"; // Hide error message when modal opens
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Function to submit the phone number
function submitPhoneNumber() {
  const phoneNumber = document.getElementById("phone-number").value;
  const errorMessage = document.getElementById("error-message");

  if (isValidPhoneNumber(phoneNumber)) {
    alert(`Phone number submitted: ${phoneNumber}`);
    closeModal();
  } else {
    errorMessage.style.display = "block";
  }
}

// Function to validate the phone number
function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^[0-9]+$/; // Regular expression to allow only numbers
  return phoneRegex.test(phoneNumber) && phoneNumber.length >= 10;
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
