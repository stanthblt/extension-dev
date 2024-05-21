document.getElementById('simulateDevice').addEventListener('click', () => {
  const device = document.getElementById('device').value;
  const deviceResolutions = {
    'responsive': [0, 0],
    'iphone-5': [320, 568],
    'iphone-6-7-8': [375, 667],
    'iphone-6-7-8-plus': [414, 736],
    'iphone-x': [375, 812],
    'ipad': [768, 1024],
    'ipad-pro': [1024, 1366]
  };

  const [width, height] = deviceResolutions[device] || [0, 0];
  if (width && height) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tab = tabs[0];
      if (tab) {
        chrome.windows.create({
          url: tab.url,
          width: width,
          height: height,
          type: 'popup'
        });
      }
    });
  }
});
