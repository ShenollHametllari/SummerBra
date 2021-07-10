function validateForm() {
    var emri = document.getElementById("emri").value;
    var email = document.getElementById("email").value;
    var pershkrimi = document.getElementById("pershkrimi").value;
    var qyteti = document.getElementById("qyteti").value;
    var tel = document.getElementById("telefoni").value;
    if (emri !== "" && email !== "" && pershkrimi !=="" && qyteti !=="" && tel !=="" ) {
        document.getElementById("btn").removeAttribute("disabled");
    }
    
   else{
       document.getElementById('btn').disabled=true
    }
    
    
  }


 
  