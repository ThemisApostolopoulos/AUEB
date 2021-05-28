var templates = {};





window.onload = function(){

       
    
    let button = document.getElementById("button"); //the search button
    var title;//variable for book's title 
    var searchAuthor; //variable to save the author name the user will search for

    //event listener for the search button:fetch the data from the correct url
    function buttonListeners(){
        let buttons = document.getElementsByClassName("save-button");
        for(let i =0; i<buttons.length; i++){
            buttons[i].addEventListener("click", ()=>{
                console.log(this.id);
                let x = document.getElementById(this.id);
                console.log(x);
            })
        }
    }

     //post to api(add a new favourite book)
     async function postRequest(url , dataSave){
        const response = await fetch(url, {method: 'POST',mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // body:JSON.stringify({"titleAuth": "Peos Laxtaristo",
        // "workid": "790"})
         body: JSON.stringify(dataSave)
    })

    //console.log(dataSave);
    //console.log(JSON.stringify(dataSave));
    
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        //alert the user that the book is already saved
        alert("book already saved!");
        throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
    return data;

    }

    button.addEventListener("click",()=>{
        
        //get the value from the search field
        searchAuthor = document.getElementById("first_name").value;
        title = document.getElementById("book_title").value;
        console.log(searchAuthor);
        console.log(title);
        var urlWorks = "https://reststop.randomhouse.com/resources/works?search=";
        var urlAuthor = "https://reststop.randomhouse.com/resources/authors?lastName=";
        var urlId = "https://reststop.randomhouse.com/resources/works/"

        
       
        async function fetchData(url){

        //call the fetch API (init object as the 2nd param has the request method as GET, put in the headers the accept json param.)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        //check if the response status is ok(ok means the number is "around" 200)
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        // console.log(data);
        return data;

    }

   

        

    
      //correct url depending on the type of search

      //show the results from the title search
      if(title){
        urlWorks = urlWorks + title;
        fetchData(urlWorks);
        //from the returned data get the authors
        fetchData(urlWorks).then(data =>{
            console.log(data);
            console.log(data.work);
            var rawTemplate = document.getElementById("results-template").innerHTML;
            var compiledTemplate = Handlebars.compile(rawTemplate);
            var generatedHtml = compiledTemplate(data);
            var div = document.getElementById("contents");
            div.innerHTML = generatedHtml;
            //console.log(div.innerHTML);
            buttonListeners().catch(error => {
                alert("book already saved");
                error.message; // "An error has occurred: 404"
                });;
           

            // for(let i in data.work){
            //     console.log(data.work[i].titleAuth);
                
            // }
        }).catch(error => {
        error.message; // "An error has occurred: 404"
        });
    }


    //show the books from the authors whose last name is "searchAuthor" for example brown
    if(searchAuthor){
        //take the correct url
        urlAuthor = urlAuthor + searchAuthor;
        fetchData(urlAuthor);
        //from the return data get the authors
        fetchData(urlAuthor).then(data =>{
          
            //for every author
            for(let i in data.author){
                let author = data.author[i]
                //console.log("Author: " + author.authorid + " " + author.authorlastfirst);
                
                //for every work of the author[i]
                for(let y in author.works){
                    let workDetails = author.works[y];
                    //check if the author[i] has an array of works
                    if(Array.isArray(workDetails)){
                      for(let x in workDetails){
                        //take the correct url
                        let urlBookId = urlId + workDetails[x] + "/";
                        //call the async function
                        fetchData(urlBookId)
                        //get the results
                        fetchData(urlBookId).then(data =>{
                            console.log(data.titleAuth);
                        }).catch(error =>{
                            error.message;
                        })
                      }
                    }
                    else{
                        let urlBookId = urlId + workDetails + "/" 
                         fetchData(urlBookId)
                        //get the results
                        fetchData(urlBookId).then(data =>{
                            console.log(data.titleAuth);
                        }).catch(error =>{
                            error.message;
                        })
                      
                    }
                  }
            }
            
        }).catch(error => {
        error.message; // "An error has occurred: 404"
        });
    }  
      
    
   

    

    })

    function buttonListeners(){
        let buttons = document.getElementsByClassName("save-button");
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
                postRequest("http://localhost:5000/books", JSON.parse(x.value));


            })
        }
    }
   
}