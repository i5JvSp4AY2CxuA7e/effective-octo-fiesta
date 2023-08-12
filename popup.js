document.addEventListener("DOMContentLoaded", () => {
    var searchTextField = document.getElementById("search-text");
    searchTextField.addEventListener('keypress', handleKeyPress, false);

    var searchButton = document.getElementById("search-submit");
    searchButton.onclick = handleSearchButton;

    var jpdbLink = document.getElementById("jpdb-link");
    jpdbLink.onclick = (event) => {
        event.stopPropagation();
        navigateToJpdb("");
    };
});

function handleKeyPress(event) {
    var keyCode = event.keyCode;
    // Search when Enter/Return key is pressed
    if (keyCode == 13) {
        var searchText = event.target.value;
        navigateToJpdb(searchText);
    }
};

function handleSearchButton() {
    var searchText = document.getElementById("search-text").value;
    navigateToJpdb(searchText)
};
