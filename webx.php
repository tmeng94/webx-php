<?php

include("cryptojs-aes.php");

// Retrieve data from Query String
$action = $_POST['action'];
$key1 = $_POST['key1'];
$key2 = $_POST['key2'];
$text = $_POST['text'];

$key3 = "WeiBuXin @_@ 微不信";

if ($action === "encrypt") {
    echo "Webx!" . cryptoJsAesEncrypt($key1 . "!" . $key2 . "!" . $key3, $text);
} elseif ($action === "decrypt") {
    if (substr( $text, 0, 5 ) === "Webx!") {
        $res = cryptoJsAesDecrypt($key1 . "!" . $key2 . "!" . $key3, substr($text, 5));
        if (!$res) {
            echo "Sorry, I can't decrypt your text.";
        } else {
            echo $res;
        }
    } else {
        echo "Sorry, I can't decrypt your text.";
    }
} else {
    echo "Unknown action.";
}

?>