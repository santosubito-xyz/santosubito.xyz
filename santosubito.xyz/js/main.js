firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("content").style.display = "block";
      document.getElementById("login_content").style.display = "none";
  
      var user = firebase.auth().currentUser;
        if (user != null) {
            var email_id = user.email;
            document.getElementById("welcomemsg").innerHTML = "Witaj, " + email_id;

        }
    } else {
      // No user is signed in.
  
      document.getElementById("login_content").style.display = "none";
      document.getElementById("content").style.display = "block";
  
    }
  });


  function logout(){
    firebase.auth().signOut();
  }

  function login() {
    document.getElementById("content").style.display = "none";
    document.getElementById("login_content").style.display = "block";

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                window.alert("Error : " + errorMessage);
  });
  }
