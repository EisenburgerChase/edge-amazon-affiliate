chrome.webNavigation.onBeforeNavigate.addListener(
    function(details) {
      // Ignoriere bereits modifizierte URLs
      if (details.url.includes("tag=stemey-21")) {
        return;
      }
  
      const url = new URL(details.url);
      
      if (url.hostname === "amazon.de" || url.hostname === "www.amazon.de") {
        let baseUrl = url.origin + url.pathname;
        // let baseUrl = url.origin + url.pathname.replace(/^\//, '');
        
        if (!url.search) {
          baseUrl += "?tag=stemey-21";
        } else {
          baseUrl += url.search + "&tag=stemey-21";
        }
        
        chrome.tabs.update(details.tabId, {url: baseUrl});
      }
    }
  );