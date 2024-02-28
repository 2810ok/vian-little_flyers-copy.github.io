document.addEventListener("DOMContentLoaded", function() {
    // URL of the external HTML file containing the section
    var externalSectionUrl = "../Home/dishcarddesign-main/index.html";
    
    // Fetch the content of the external HTML file
    fetch(externalSectionUrl)
      .then(response => response.text())
      .then(data => {
        // Insert the fetched HTML content into the specified div
        document.getElementById("external-section").innerHTML = data;
      })
      .catch(error => console.error("Error fetching external section:", error));
  });
  