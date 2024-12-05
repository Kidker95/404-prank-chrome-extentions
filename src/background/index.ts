
function setIcon() {
    chrome.runtime.onInstalled.addListener(() => {
        chrome.action.setIcon({
            path: "/assets/icon.png"
        });
    });
}

