onload = function() {
    if(window.localStorage.getItem("dark-mode")) {
        console.log('tem valor sim')
        var mode = window.localStorage.getItem("dark-mode");
        body.className = mode;
        if (mode == "dark-mode") {
            document.getElementById('switchCheckbox').setAttribute('checked', 'checked');
        } else {
            document.getElementById('switchCheckbox').removeAttribute('checked');
        }
    }
}

function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    window.localStorage.setItem("dark-mode", (currentClass == "dark-mode" ? "light-mode" : "dark-mode"));
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    if (body.className == "dark-mode") {
        document.getElementById('switchCheckbox').setAttribute('checked', 'checked');
    } else {
        document.getElementById('switchCheckbox').removeAttribute('checked');
    }
}

(function () {
    emailjs.init("user_kff6tXQbqwxUQhPvRT0PC");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };

    emailjs.send('service_7z101ll', 'template_itmfjtv', contactParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text, fullName );
        $("#username").text(fullName);
        $("#sucessModal").appendTo("body").modal('show');
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
        
     
       $('#form').trigger("reset");
    }, function(error) {
       console.log('FAILED...', error);
    });
}

function closemodal() {
    $("#sucessModal").modal("hide"); 

    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
}



function myFunction() {
    var x = document.getElementById("navigationMenu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }