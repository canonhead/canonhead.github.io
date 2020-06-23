function openTab(evt, tabName){
    
    var tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("body");

    for (var i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(var i=0; i<tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    document.getElementById("default").style.display = "none";
    if(tabName == "blog"){
        document.getElementById(tabName).style.display = "block";
    }
    else{
        document.getElementById(tabName).style.display = "grid";
    }
    evt.currentTarget.className += " active";
}

function home(id){
    document.getElementById(id).style.display = "none";
    document.getElementById("default").style.display = "block";
    tablinks = document.getElementsByClassName("tablinks");
    for(var i=0; i<tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    document.getElementById("blogentry").style.display = "none";
}

function viewEntry(entryName){
    document.getElementById("bloglist").style.display = "none";
    document.getElementById("blogentry").style.display = "block";
}