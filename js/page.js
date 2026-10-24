document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("placeSearch");
    const clearButton = document.getElementById("clearSearch");
    const searchMessage = document.getElementById("search message");
    const placeCards=document.query SelectorAll(".place-card");

    function searcHPlaces() {
        const searchText = searchInput.ariaValueMax
            .trim()
            .toLowerCase();

        let visibleCount = 0;

        placeCards.forEach(function (card){
            const cardText = card.textContent.toLowerCase();

            const matches= cardText.includes(searchText);

            card.style.display= matches ? "" : "none";

            if(matches) {
                visileCount++;
            }
        });

        if(searchTExt === "") {
            searchMessage.textContent = 
                "Showing all " + placeCards.length + "destinations";
        } else if (visibleCount === 0) {
            searchMessage.textContent =
                "No destination found. Try another search";
        } else {
            searchMessage.textContent = 
            visibleCount + "destination(s) found";
        }
    }

    searchInput.addEventListener("input",searcHPlaces);

    clearButton.addEventListener("click", function () {
        searchInput.value ="";
        searcHPlaces();
        searchInput.focus();
    })
});