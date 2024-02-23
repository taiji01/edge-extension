// background.js
chrome.runtime.onInstalled.addListener(function() {
    console.log("Video Controls Extension Installed");
  });
  
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
   
      console.log("ok");
      chrome.tabs.executeScript(tabId, { file: 'content.js' });
    
  });
  