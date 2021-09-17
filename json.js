function sendJSON(){ 

               

    let result = document.querySelector('.result'); 

    let name = document.querySelector('#name'); 

    let email = document.querySelector('#email'); 

    let email = document.querySelector('#Number'); 

    let email = document.querySelector('#password'); 

    let email = document.querySelector('#retype-password'); 

       

    // Creating a XHR object 

    let xhr = new XMLHttpRequest(); 

    let url = "submit.js"; 



    // open a connection 

    xhr.open("POST", url, true); 



    // Set the request header i.e. which type of content you are sending 

    xhr.setRequestHeader("Content-Type", "application/json"); 



    // Create a state change callback 

    xhr.onreadystatechange = function (param) { 

        if (xhr.readyState === 4 && xhr.status === 200) { 



            // Print received data from server 

            result.innerHTML = this.responseText; 



        } 

    }; 



    // Converting JSON data to string 

    var data = JSON.stringify({ "name": name.value, "email": email.value, "Number": Number.value , "password": password.value,
    "retype-password": retype.value}); 



    // Sending data with the request 

 /*   JSON.stringify({
        
        function (param) {     // working on it for correct results........
            return param;
        }
    })*/
}
