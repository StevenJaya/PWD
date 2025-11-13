function fn_ValForm() {
  var sMsg = "";

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // regex dari hint di modul
  var reEmail = /^[a-z0-9][a-z0-9_.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_.-]{0,}[a-z0-9][.][a-z0-9]{2,4}$/;

  if (name == "") {
    sMsg += "\n Anda belum mengisikan nama";
  }

  if (email == "") {
    sMsg += "\n Anda belum mengisikan email";
  } else if (!reEmail.test(email)) {
    sMsg += "\n Format email tidak valid";
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
