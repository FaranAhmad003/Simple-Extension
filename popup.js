document.addEventListener('DOMContentLoaded', function() {
    var colorPicker = document.getElementById('colorPicker');
    var changeColorBtn = document.getElementById('changeColorBtn');
  
    changeColorBtn.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
          action: 'changeColor',
          color: colorPicker.value
        });
      });
    });
  });
  