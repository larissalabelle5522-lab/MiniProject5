
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitSearch");
    const searchInput = document.getElementById("placeSearch");
    const clearButton = document.getElementById("clearSearch");
    const searchMessage = document.getElementById("searchMessage");
    const placeCards = document.querySelectorAll(".place-card").length;

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

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#filters button");
    const cards = document.querySelectorAll("#places .place-card");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const category = button.getAttribute("data-category");

            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            cards.forEach(function (card) {
                const cardCategory = card.getAttribute("data-category");

                card.style.display =
                    category === "All" || cardCategory === category
                        ? ""
                        : "none";
            });
        });
    });
});
