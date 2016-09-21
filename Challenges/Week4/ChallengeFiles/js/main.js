function openBlock (id) {
    var block = document.getElementById(id.substr(10));
    var blocks = document.getElementById("main_content").getElementsByTagName("div");
    var link = document.getElementById(id).parentElement
    var activeLink = document.getElementsByClassName('active')[0]

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";

    activeLink.classList.remove('active')
    link.classList.add('active')
    // TODO: add the "active" class to the li element that contains the link that was clicked

}

// TODO: add the "hover" class to the menu items when you hover over them


// TODO: set up the tooltip plugin on all of the links in the menu

$('#menu > li > a')
  .on('click', function() {
    openBlock($(this).attr('id'))
  })
