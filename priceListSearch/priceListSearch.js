/* Written by Jonas Tisell at Hjemmesidehuset */

if (typeof snippet_search === 'undefined') {
  var snippet_search = "Search";
}

if (typeof snippet_results === 'undefined') {
  var snippet_results = "results";
}

function search(query, listId) {
  const elem = document.getElementById(listId);
  const resultElem = document.querySelector(`#${listId} [data-type="result-counter"]`);
  if (!elem) { return; }

  let productCount = 0;

  const products = elem.querySelectorAll("ul > li");
  for (let i = 0; i < products.length; i++){
    if (!query.trim()) {
      products[i].className = "";
      productCount++;
      continue;
    }

    if (!products[i].innerText.toLowerCase().includes(query.toLowerCase())) {
      products[i].classList.add("hidden");
    } else {
      products[i].className = "";
      productCount++;
    }
  }
  resultElem.innerText = `${productCount} ${snippet_results}`;
  resultElem.classList.remove("hidden");
}

if (!searchablePriceLists) {
  console.warn("Search isn't enabled on any price lists!");
  var searchablePriceLists = [];
}

for (let i = 0; i < searchablePriceLists.length; i++){
  if (!document.getElementById(searchablePriceLists[i])) { continue; }
  if (document.querySelector("[data-istool]")) { break; }

  const resultCounter = document.createElement("p");
  resultCounter.classList.add("smalltext", "hidden");
  resultCounter.dataset.type = "result-counter";

  const searchHolder = document.createElement("div");
  searchHolder.classList.add("search");
  searchHolder.style.display = "flex";
  searchHolder.style.flexDirection = "column";
  searchHolder.style.alignItems = "flex-end";

  const searchBar = document.createElement("div");
  searchBar.classList.add("searchForm", "form");
  searchBar.style.display = "flex";
  searchBar.style.marginTop = "0";
  searchHolder.appendChild(searchBar);

  searchHolder.appendChild(resultCounter);
  
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.style.border = "1px solid #ccc";
  searchInput.style.marginTop = "0";
  searchInput.placeholder = snippet_search;
  searchBar.appendChild(searchInput);

  const searchBtn = document.createElement("div");
  searchBtn.classList.add("searchicon");
  searchBtn.style.cursor = "pointer";
  searchBtn.addEventListener("click", function () { search(`${searchInput.value}`, searchablePriceLists[i]); })
  searchBar.appendChild(searchBtn);
  
  searchInput.addEventListener("keypress", function (event) { if (event.key === "Enter") { searchBtn.click(); } });

  document.getElementById(searchablePriceLists[i]).insertBefore(searchHolder, document.getElementById(searchablePriceLists[i]).firstElementChild);
}