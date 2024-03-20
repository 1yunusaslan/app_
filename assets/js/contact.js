function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "denemeunvitec@gmail.com",
        Password : "AAB3571211405E00E9B2DD93099CB2E1FED8",
        To : 'denemeunvitec@gmail.com',
        From :"denemeunvitec@gmail.com",
        Subject : "New Contact From Enquiry",
        Body : "Name:" + document.getElementById("full_name").value
            + "<br> Email: " +  document.getElementById("email").value
            + "<br> Message: " +  document.getElementById("message").value
    }).then(
      message => alert("Mesajınız gönderildi.")
    );
}