var coll = document.getElementsByClassName("collapsible");
var i;

coll[0].classList.toggle("active");
coll[0].nextElementSibling.style.maxHeight = coll[0].nextElementSibling.scrollHeight + "px";

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}