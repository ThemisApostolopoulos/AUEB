window.addEventListener("load", function(){
    let buttonCss = document.querySelector("#button");
    buttonCss.onclick = function(){
        let titleHeader = document.getElementById("header-text");
        titleHeader.style.textAlign = "center";
        //titleHeader.style.color = "red";
    }

    let buttonColor = document.querySelector("#color-button");
    buttonColor.onclick = function(){
        let header_item = document.querySelector(".grid-header");
        header_item.style.backgroundColor = "#22445a";
    }
    let d = new Date();
        let day;
    
        switch(d.getDay()){
            case 0:
                day = "Κυριακή";
                break;
            case 1:
                day = "Δευτέρα";
                break;
            case 2:
                day =  "Τρίτη";
                break;
            case 3:
                day = "Τετάρτη";
                break;
            case 4:
                day = "Πέμπτη";
                break;
            case 5:
                day = "Παρασκευή";
                break;
            case 6:
                day = "Σάββατο";
        }
        let month;
        console.log(d.getMonth());
        switch(d.getMonth()){
            case 0:
                month = "Ιανουαριού";
                break;
            case 1:
                month = "Φεβρουαρίου";
                break;
            case 2:
                month =  "Μαρτίου";
                break;
            case 3:
                month = "Απριλίου";
                break;
            case 4:
                month = "Μαιού";
                break;
            case 5:
                month = "Ιουνίου";
                break;
            case 6:
                month = "Ιουλίου";
                break;
            case 7:
                month = "Αυγούστου";
                break;
            case 8:
                 month = "Σεπτεμβρίου";
                  break;
             case 9:
                 month = "Οκτωβρίου";
                 break;
             case 10:
                month = "Νοεμβρίου";
                break;
             case 10:
                month = "Δεκεμβρίου";
        }

        
        document.getElementById("date").innerHTML = "Ημερομηνία: "+ day +" " + d.getDate() + " " + month + " " + d.getFullYear(); 
})

   /* window.onload = function(){
        var d = new Date();
        var day;
    
        switch(d.getDay()){
            case 0:
                day = "Κυριακή";
                break;
            case 1:
                day = "Δευτέρα";
                break;
            case 2:
                day =  "Τρίτη";
                break;
            case 3:
                day = "Τετάρτη";
                break;
            case 4:
                day = "Πέμπτη";
                break;
            case 5:
                day = "Παρασκευή";
                break;
            case 6:
                day = "Σάββατο";
        }
    
        
        document.getElementById("date").innerHTML = "Current Date: "+ d.getDate() +" " + day + " " +d.getMonth() + " " + d.getFullYear(); 
    } */