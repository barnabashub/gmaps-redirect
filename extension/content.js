function addListItem() {
  var list = document.querySelector('div[role="list"]');
  var newItem = `<div role="listitem" data-hveid="CAkQAA" data-ved="2ahUKEwi1xcv-sKmGAxUdvokEHXJFBpYQtoAJKAB6BAgJEAA">
                      <a  
                      id="mapslink"
                      href="https://www.google.com/maps/search/"
                      class="LatpMc nPDzT T3FoJb" jsname="VIftV" role="link" data-hveid="CAkQAQ"
                      >
                        <div jsname="bVqjv" class="YmvwI">Térkép</div>
                      </a>
                  </div>`;
  list.innerHTML += newItem;
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
