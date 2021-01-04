function validationForm(event){

    var fullname = document.getElementById("fullname").value
    var email = document.getElementById ("email").value
    var subject = document.getElementById ("subject").value
    var message = document.getElementById ("isi").value

    var radioOptions = document.getElementsByName ("gender")
    var gender = "No Gender"
    for (let i =0; i <radioOptions.length; i++){
        if(radioOptions[i].checked){
            gender = radioOptions[i].value
            break
        }
    }

    var agree = document.getElementById("agree").checked
    event.preventDefault()

    console.log("fullname: "+fullname);
    console.log("email: "+email);
    console.log("subject: "+subject);
    console.log("message: "+message);
    console.log("gender: "+gender);
    console.log("agree: "+agree);

    if (fullname.length < 3){
        event.preventDefault()
        alert ("Nama tidak valid")
    }

    if (gender === "No Gender"){
        event.preventDefault()
        alert ("Tolong pilih jenis kelamin")
    }

    if (email.length < 1){
        event.preventDefault()
        alert ("Tolong masukkan email")
    }

    if(subject.length < 1){
        event.preventDefault()
        alert ("Tolong masukkan subyek")
    }

    if(message.length < 1){
        event.preventDefault()
        alert ("Tolong masukkan pesan")
    }

    if (agree === false){
        event.preventDefault()
        alert ("Tolong untuk menyetujui layanan kami")
    }

}


function clear(){
    document.getElementById("form").reset();
}