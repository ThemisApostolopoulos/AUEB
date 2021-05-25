window.onload = function(){

    console.log("hello");
    let button = document.getElementById("button"); //the search button
    var searchAuthor; //variable to save the author name the user will search for

    //event listener for the search button:fetch the data from the correct url
    button.addEventListener("click",()=>{
        console.log("hello again");
        //get the value from the search field
        searchAuthor = document.getElementById("first_name").value;
        console.log(searchAuthor);


        //correct url 
        var url = "https://reststop.randomhouse.com/resources/works?search=" + searchAuthor;
        //fetch the data from the API with an async function
        async function fetchData(url){
        //call the fetch API
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
        return data;

    }

        //from the return data get the authors
        fetchData(url).then(data =>{
            for(let i in data.work){
                console.log(data.work[i].titleAuth);
                
            }
        console.log(data.work);
    }).catch(error => {
        error.message; // "An error has occurred: 404"
      });

      fetchData(url);

   

    

    })
   
}