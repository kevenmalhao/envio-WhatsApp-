function sendToWhatsapp(){
    let number = "+5599984742079";
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text="
    + " Nome : " +nome+ "%0a"
    + " Email : " +email+ "%0a"
    + " Message : "+message+"%0a%0a";
    window.open(url,target="_blank").focus();
}