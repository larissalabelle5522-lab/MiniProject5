
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitSearch");
    const searchInput = document.getElementById("placeSearch");
    const clearButton = document.getElementById("clearSearch");
    const searchMessage = document.getElementById("searchMessage");
    const placeCards = document.querySelectorAll(".place-card");

    function searchPlaces() {
        const searchText = searchInput.value.trim().toLowerCase();

        let visibleCount = 0;

        placeCards.forEach(function (card) {
            const cardText = card.textContent.toLowerCase();
            const matches = cardText.includes(searchText);

            card.style.display = matches ? "" : "none";

            if (matches) {
                visibleCount++;
            }
        });

        if (searchText === "") {
            searchMessage.textContent =
                "Showing all " + placeCards.length + " destinations";
        } else if (visibleCount === 0) {
            searchMessage.textContent =
                "No destinations found. Try another search.";
        } else {
            searchMessage.textContent =
                visibleCount + " destination(s) found";
        }
    }

    searchInput.addEventListener("input", searchPlaces);

    clearButton.addEventListener("click", function () {
        searchInput.value = "";
        searchPlaces();
        searchInput.focus();
    });

    searchPlaces();
        submitButton.addEventListener("click", searchPlaces);
        searchInput.addEventListener("keydown",function (event) {
            if (event.key === "Enter") {
                searchPlaces();
            }
        })
});


document.querySelectorAll(".place-card").forEach(function (card) {
    card.style.cursor = "pointer";

    card.addEventListener("click", function () {
        const location = card.querySelector(".location, h2");

        if (location) {
            const placeName = location.textContent.trim();
            const mapsURL =
                "https://www.google.com/maps/search/?api=1&query=" +
                encodeURIComponent(placeName);

            window.open(mapsURL, "_blank", "noopener,noreferrer");
        }
    });
});
