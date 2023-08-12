function navigateToJpdb(searchText) {
    var jpdbURL = "https://jpdb.io/search/" + searchText.trim();
    // If this is a single kanji character, append #kanji to the URL
    // to navigate directly to the kanji page
    if (/^[\u4e00-\u9faf]$/.test(searchText)) {
        jpdbURL = jpdbURL + "%23kanji";
    }
    chrome.tabs.create({
        url: jpdbURL
    });
}
