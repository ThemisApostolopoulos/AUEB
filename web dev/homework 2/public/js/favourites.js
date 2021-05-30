function buttonListenersDelete(){
    let buttons = document.getElementsByClassName("delete-button");
    console.log(buttons);
    for(let i =0; i<buttons.length; i++){
        buttons[i].addEventListener("click", ()=>{
        // console.log(buttons[i].id);
        //buttons[i].disabled = true;
        let x = document.getElementById(buttons[i].id);
        //let dataSave = JSON.parse(x.value);
        // console.log(x);
        console.log(x.id);
        console.log(x.value);
        //postRequest("http://localhost:5000/books", JSON.parse(x.value));
        let urlDelete = "http://localhost:5000/books/"+String(x.id);
        console.log(urlDelete);
        deleteRequest(urlDelete);
        location.reload();
        return false;



    })
}
}


function buttonListenerSearch(){
    let button = document.getElementById("button-search");
    console.log(button);
    button.addEventListener('click', ()=>{
        const searchField = document.getElementById("bookSearch").value;
        console.log(searchField);
        const urlSearch = "http://localhost:5000/books/search=?" + searchField;
        // searchRequest(urlSearch);
        // location.reload();
        // return false;
        if(searchField){
            window.location.href = urlSearch;
        }
    })


}


async function deleteRequest(url){
    const response = await fetch(url, {method: 'DELETE',mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // body:JSON.stringify({"titleAuth": "Peos Laxtaristo",
    // "workid": "790"})
    //  body: JSON.stringify(dataSave)
    })
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        //alert the user that the book is already saved
        alert("book isnt saved!");
        throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
    return data;
    }


function buttonListenersEdit(){
    let buttons = document.getElementsByClassName("edit-button");
    console.log(buttons);
    for(let i =0; i<buttons.length; i++){
        buttons[i].addEventListener("click", ()=>{
        // console.log(buttons[i].id);
        //buttons[i].disabled = true;
        let x = document.getElementById(buttons[i].id);
        //let dataSave = JSON.parse(x.value);
        console.log(x);
        console.log(x.id);
        //console.log(x.value.titleAuth);
        let titleAuth = JSON.parse(x.value);
        //console.log(titleAuth.titleAuth);
        let urlEdit = "http://localhost:5000/books/" + String(titleAuth.titleAuth) +"/"+String(x.id);
        window.location.href = urlEdit;

    })
}
}



window.addEventListener('load', ()=>{
    // var searchInput = document.getElementById("bookSearch");
    // let typingTimer;
    // let doneTypingInterval = 500; //0.5sec
    // searchInput.addEventListener('keyup', () => {
    //     clearTimeout(typingTimer);
    //     console.log(searchInput.value);
    //     if (searchInput.value) {
    //         const urlSearch = "http://localhost:5000/books/search=" + searchInput.value;
    //         typingTimer = setTimeout(searchRequest(urlSearch), doneTypingInterval);
    //     }else{
    //     //   //empty input in search bar
    //     //   typingTimer = setTimeout(displaySavedBooks, doneTypingInterval);
    //     }
    // });

    // if(searchInput.value){
    //     const urlSearch = "http://localhost:5000/books/search=" + searchInput.value;
    //     searchRequest(urlSearch);


    // }
    buttonListenerSearch();
    buttonListenersDelete();
    buttonListenersEdit();


})