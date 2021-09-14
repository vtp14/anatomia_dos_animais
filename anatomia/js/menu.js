function active_menu(){

    let menu = document.getElementById("id_menu");

    if(menu.className == "menu"){
        menu.className += " responsive";
    }else{
        menu.className = "menu";
    }
    
}