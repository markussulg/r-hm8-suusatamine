//https://www.w3schools.com/howto/howto_js_collapsible.asp

// leiab kõik elemendid, millel on collapsible class
var coll = document.getElementsByClassName("collapsible");
var i;

// igale collapsible class elemendile seame sündmuse, mis aktiveerub kui vajutame collapsible objekti peale
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // Kui on objektil klass "active", siis eemalda. Muidu lisa klass "active".
    this.classList.toggle("active");
    // Võta järgmine alluv (list tekstidega)
    var content = this.nextElementSibling;
    // Kui kuvame alluvat, siis lõpeta kuvamine, muidu kuva.
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}