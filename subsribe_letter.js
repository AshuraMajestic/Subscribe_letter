function maje() {
    document.getElementById("click").style.display = "none";
    document.getElementById("form").style.display = "block";
}

function kuchtoho() {
    document.getElementById("click").style.display = "block";
    document.getElementById("form").style.display = "none";
}
const form = document.querySelector("#contactForm");
form.addEventListener("submit", e => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    document.querySelector("#contactForm").requestFullscreen();
    sendEmail(email);
})

function sendEmail(email) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ashuramajestic@gmail.com",
        Password: "B282E7C66F5819F11469DE949DD8EDD2EA36",
        To: email,
        From: "ashuramajestic@gmail.com",
        Subject: "Gurukul ke tin stambh",
        Body: "Gurukul ke tin stambh ke bare mai jan ke kya karega tu jitna janta hai utna bohot hai.Mai iky6a bolta hu tu thoda pani le or usse nahale kyuki tere nashib mai sirf sooryavanshm ki kheer hai. But chinta mat ka rjab tak jiyega tab tak messge ayega ab idhar se."
    }).then((success) => {
        alert("message sent successfully");
    }).catch((error) => { alert("message not sent"); })
}