chrome.contextMenus.create({
    'type':'normal',
    'title':'Translating to Chinese...',
    'contexts':['selection'],
    'id':'cn',
    'onclick':translate
});

function translate(info, tab){
    var url = 'http://translate.google.com/#auto/zh-CN/'+info.selectionText ;
    window.open(url, '_blank');
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    chrome.contextMenus.update('cn',{
        'title':'Using google Translate “'+message+'”'
    });
});
