let atdClicked = false;

const atdBtn = document.querySelector('#btnAtd');
const feedBtn = document.querySelector('#btnFeedback');

atdBtn.addEventListener('click', function () {
    if (!atdClicked) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { 
                message: "showAttendance" 
            });
        });
        atdClicked = true;
    }
    else {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                message: "hideAttendance" 
            });
        });
        atdClicked = false;
    }
});


feedBtn.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 
            message: "fillfeedback" 
        });
    });
});