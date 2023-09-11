let clicked= false;
document.getElementById('btn').addEventListener('click', function() {
    if(!clicked){
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { act: "disp" });
        });
        clicked = true;
    }
    else if(clicked){
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { act: "hide" });
        });
        clicked = false;
    }
    
});