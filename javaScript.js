function toggle(elements, more) {
    var set = document.getElementsByClassName(elements);
    var item = document.getElementById(more);
    var taille = elements.length;

    if (item.style.display == "none"){
        for (var i = 0; i < taille; i++) {
            set[i].style.display = "none";
        }
       item.style.display = "inline";
    }else{
        for (var i = 0; i < taille; i++) {
            set[i].style.display = "none";
        }
    }
}

function show(elems) {
    var myElem = document.getElementById(elems);
    myElem.style.display="inline";
}
function hide(elems) {
    var myElem = document.getElementById(elems);
    myElem.style.display="";

}

let setUpToolTip = function() {
    let tooltip = "";
    toolTipDiv = document.querySelector(".div-tooltip");
    toolTipElements = document.getElementsByClassName('hover-reveal');


    for (i = 0; i < toolTipElements.length; i++) {
        toolTipElements[i].addEventListener("mouseout", function(e) {
            toolTipDiv.style.opacity = 0;
        });
        toolTipElements[i].addEventListener("mousemove", function(e) {
            displayTooltip(e, this);
        });

    }

    let displayTooltip = function(e, obj) {
        tooltip = obj.getAttribute("data-tooltip");
        toolTipDiv.innerHTML = tooltip;
        toolTipDiv.style.top = e.pageY + "px";
        toolTipDiv.style.left = e.pageX + "px";
        toolTipDiv.style.opacity = 1;
    }
}