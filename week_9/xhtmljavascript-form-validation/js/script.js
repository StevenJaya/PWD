function fn_ValForm(){
    var sMsg = "";
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        sMsg += "\n Anda belum mengisikan nama";
    }
    if (email == "") {
        sMsg += "\n Anda belum mengisikan email";
    } else {
        // Regex email sesuai hint (dikoreksi ke [a-z0-9] dan dibuat case-insensitive)
        var re = /^[a-z0-9][a-z0-9_\.-]*[a-z0-9]@[a-z0-9][a-z0-9_\.-]*[a-z0-9][\.][a-z0-9]{2,4}$/i;
        if (!re.test(email)) {
            sMsg += "\n Format e-mail tidak valid";
        }
    }
    if (message == "") {
        sMsg += "\n Anda belum mengisikan pesan";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}