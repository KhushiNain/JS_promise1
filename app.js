// create a function and following the progressions inside the function.

function getData(){
  // Progression 1: Create a promise call which fetches data
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()
    ).then((result)=>{
      console.log(result);
  // Progression 2: Display the fetched data in the form of list
      var player='<h2>Lists of Users</h2>';
   result.forEach(function(user) {
             player+=`<div class="player">
                        <div class="strength">Name : ${user.name}</div>
                        <div>Email   : ${user.email}</div>
                        <div>Phone   : ${user.phone}</div>
                        <div>Website : ${user.website}</div>
                        <div>Company : ${user.company.name}</div>
                        <div>City    : ${user.address.city}</div>
                        <div>Zipcode : ${user.address.zipcode}</div>
                       </div>`
   });
   document.getElementById("message").innerHTML=player;
  // Progression 3: When the promise call is rejected then throw an error
    }).catch((error)=>{
      console.log("Promise rejected");
      console.log(error.message);
    });
  }
  