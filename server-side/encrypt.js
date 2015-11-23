var crypto = require('crypto');

var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
var password = 'test123';

function encrypt(text) {
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text,'hex','utf8');
  dec += decipher.final('utf8');
  return dec;
}
 
var hw = encrypt("hello worldssss")

// outputs hello world
console.log(decrypt(hw));
