window.onload = function() { 

    var search = document.getElementById("btn");
    search.addEventListener("click", function(e) {
        e.preventDefault();


    var result = document.getElementById("result");
    result.innerHTML = "<p>loading</p>"
    var Input = document.getElementById("SuperHeroes").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
    
    fetch(`http://localhost:8888/info2180-lab4/superheroes.php?query= ${Input}`, {method : 'GET'})
    .then(response => response.text())
    .then(data => {
        result.innerHTML = "";
        result.innerHTML = data; 
    })
    .catch(error => console.log("There was a problem with the request"));
  });
};
