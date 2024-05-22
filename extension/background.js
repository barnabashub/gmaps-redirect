chrome.action.onClicked.addListener((tab) => {
    // Execute the provided JavaScript code on the current tab
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        // JavaScript to extract the 'q' parameter from the URL
        function getQueryParam(param) {
          const params = new URLSearchParams(window.location.search);
          return params.get(param);
        }
  
        // Get the value of 'q' parameter
        const queryParamValue = getQueryParam('q');
  
        // Decode the URL-encoded string
        const decodedValue = decodeURIComponent(queryParamValue);
  
        // Redirect to another link after displaying the result
        if (decodedValue) {
          const redirectTo = 'https://www.google.com/maps/search/' + decodedValue;
          window.location.href = redirectTo;
        }
      }
    });
  });
  