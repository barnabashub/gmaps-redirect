function addListItem() {
  let mapstext = chrome.i18n.getMessage("mapstext");
  var list = document.querySelector('div[role="list"]');
  var newItem =
    `<div role="listitem" data-hveid="CAkQAA" data-ved="2ahUKEwi1xcv-sKmGAxUdvokEHXJFBpYQtoAJKAB6BAgJEAA">
                      <a  
                      id="mapslink"
                      href="https://www.google.com/maps/search/"
                      class="LatpMc nPDzT T3FoJb" jsname="VIftV" role="link" data-hveid="CAkQAQ"
                      >
                        <div jsname="bVqjv" class="YmvwI">` +
    mapstext +
    `</div>
                      </a>
                  </div>`;
  list.innerHTML += newItem;
}

function clickableDiv() {
  var clickableDiv = document.querySelector("div.Lx2b0d");
  clickableDiv.addEventListener("click", function () {
    window.location.href = link.href;
  });
}

addListItem();

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Get the value of 'q' parameter
const queryParamValue = getQueryParam("q");

// Decode the URL-encoded string
const decodedValue = decodeURIComponent(queryParamValue);

const link = document.getElementById("mapslink");
link.href += decodedValue;

clickableDiv();
