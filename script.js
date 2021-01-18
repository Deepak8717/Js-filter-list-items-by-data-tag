document.addEventListener("click", function (e) {
  var button = e.target;
  if (button.getAttribute("data-reset") === "true") {
    resetFilter();
  } else {
    var tag = button.getAttribute("data-filter-tag");
    filterTag(tag);
  }
});

function resetFilter() {
  var items = document.querySelectorAll(".ping > li");
  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute("data-toggle", "on");
  }
}

function filterTag(tag) {
  resetFilter();
  var items = document.querySelectorAll(".ping > li");
  for (var i = 0; i < items.length; i++) {
    var itemTags = items[i].getAttribute("data-tags");

    if (itemTags != null) {
      if (itemTags.indexOf(tag) < 0) {
        items[i].setAttribute("data-toggle", "off");
      }
    }
  }
}
