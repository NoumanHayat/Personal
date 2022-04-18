async function send_email() {
    const submitButton= document.getElementById('submitButton');
    const waitText = document.getElementById('wait');
    submitButton.style.visibility = "hidden";
    waitText.style.visibility = "visible";

    const emails = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    try {
        console.log("sending");
        const result= await axios.post("http://127.0.0.1:3000/api/CONTACT",{
            
                email: emails,
                name: name,
                subject: subject,
                message: message 
            
        });
    if(result.data.status){
        //php-email-form php-email-form-message
        const formEmail= document.getElementById('php-email-form');
        const altMessage = document.getElementById('php-email-form-message');
        formEmail.style.visibility = "hidden";
        altMessage.style.visibility = "visible";
        alert("Thank you for sending message!");
    }
        

      
    } catch (er) {
        console.log(er);
    }
};
