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
            console.log("Online");
        else
            console.log("Offline");
        setTimeout(checkStatus, 5000);
    });

}



checkStatus();
