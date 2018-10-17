function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(true);
        }
    }
    xhr.onerror = function () {
        callback(false);
    }
    xhr.send();
}

function checkStatus() {
    httpRequest('http://ronniesong.tk/', function (status) {
        if (status)
            chrome.browserAction.setIcon({
                path: 'images/online.png'
            });
        else
            chrome.browserAction.setIcon({
                path: 'images/offline.png'
            });
        setTimeout(checkStatus, 5000);
    });
}

checkStatus();
