(function(){
    //
    //const txtName = document.getElementById("name");
    const txtEmail = document.getElementById("mailID");
    const txtPasswd = document.getElementById("passwd");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogout = document.getElementById("btnLogout");
    
    //Listener for login
    btnLogin.addEventListener('click', e =>{
        //Get values
        const email = txtEmail.value;
        const passwd = txtPasswd.value;
        const auth = firebase.auth();
        
        //Login
        const promise = auth.signInWithEmailAndPassword(email,passwd);
        promise.catch(e => console.log(e.message));
        
    });
    
    //Listener for signup
    btnSignUp.addEventListener('click', e =>{
        //Get values
        const mail = txtEmail.value;
        const paswd = txtPasswd.value;
        const auth = firebase.auth();
        
        //Signup
        const promise = auth.createUserWithEmailAndPassword(mail,paswd);
        promise.catch(e => console.log(e.message));
    });
    
    //Realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
       if(firebaseUser){
           console.log(firebaseUser);
       }else{
           console.log("You are not logged in!");
       }
    });
    
})