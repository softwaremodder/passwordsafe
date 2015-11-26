/**
 * Created by Mario on 2015-11-25.
 */
function encode()
{
    var key = $("#encryption_key").val();
    var text = $("#to_encrypt").val();
    console.log("Key is: "+key+" and text is " +text);
    var encrypted = CryptoJS.AES.encrypt(text,key);
    console.log("Encrypted version of text is " + encrypted.toString());
}