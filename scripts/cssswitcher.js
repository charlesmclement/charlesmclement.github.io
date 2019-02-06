function lightswitch(css_title) {
    var i, tag_name;
    for (i = 0, tag_name = document.getElementsByTagName("link") ;
      i < tag_name.length ; i++) {
        if ((tag_name[i].rel.indexOf("stylesheet") != -1) &&
          tag_name[i].title) {
            tag_name[i].disabled = true;
            if (tag_name[i].title == css_title) {
                tag_name[i].disabled = false;
            }
        }
    }
}

function menuAbout() {
    var x = document.getElementById("splash");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}