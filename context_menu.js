chrome.contextMenus.create({
    title: "Search Jpdb.io for \"%s\"",
    contexts: ["selection"],
    onclick: navigateToJpdbFromContextMenu
});

function navigateToJpdbFromContextMenu(info, tab) {
    navigateToJpdb(info.selectionText)
};
