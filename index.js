function decrypt() {
    let key1 = $("#encryptionKey1").val();
    let key2 = $("#encryptionKey2").val();
    let text = $("#cipherText").val();
    if (text.length === 0) {
        $("#plainText").val("");
    } else {
        let http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                $("#plainText").val(this.responseText);
            }
        };
        http.open("POST", "webx.php", true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send("action=decrypt&key1=" + encodeURIComponent(key1) + "&key2=" + encodeURIComponent(key2) + "&text=" + encodeURIComponent(text));
    }
}

function encrypt() {
    let key1 = $("#encryptionKey1").val();
    let key2 = $("#encryptionKey2").val();
    let text = $("#plainText").val();
    if (text.length === 0) {
        $("#cipherText").val("");
    } else {
        let http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                $("#cipherText").val(this.responseText);
            }
        };
        http.open("POST", "webx.php", true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send("action=encrypt&key1=" + encodeURIComponent(key1) + "&key2=" + encodeURIComponent(key2) + "&text=" + encodeURIComponent(text));
    }
}