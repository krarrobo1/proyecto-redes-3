// var encrypt = new JSEncrypt();
// encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----
// MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDU766o6xkS8FLuLvXerfDBgPz3
// Opsq9tQrwDmKsQaQwEBX1UtR3C6zQh6S+C1OyKFb/WHgsQqAA55asTV9Hezk+Igh
// yiYX0JHdI8AvH5sI5xtMI6LN5YEvAtBhreiwpOJMnst+XWMFY2LVrDigqj6+O9Iw
// l3N9qi98XNhqEnv6+QIDAQAB
// -----END PUBLIC KEY-----
// `);
// var encrypted = encrypt.encrypt('vegeta');

// // Decrypt with the private key...
// var decrypt = new JSEncrypt();
// decrypt.setPrivateKey(`-----BEGIN RSA PRIVATE KEY-----
// MIICXgIBAAKBgQDU766o6xkS8FLuLvXerfDBgPz3Opsq9tQrwDmKsQaQwEBX1UtR
// 3C6zQh6S+C1OyKFb/WHgsQqAA55asTV9Hezk+IghyiYX0JHdI8AvH5sI5xtMI6LN
// 5YEvAtBhreiwpOJMnst+XWMFY2LVrDigqj6+O9Iwl3N9qi98XNhqEnv6+QIDAQAB
// AoGBALfCZDt4L7pNVXQhaKOT/lovo58Dn5bzTeS3zbCn1t+iWaSy+H4bgt3F6Lay
// n/8GW2IUh5wtjL8u4ECp/1wLMDxReA74sbRrxPSi0WvmV+09YmvI8j4ds7QNYsju
// KEJh37IYPWw8hESUU5nExdOxf1EMpxMaS+FO49aHm7xKarSVAkEA+WREtRYTrEIu
// 2vld2Rc7MbkOFZoFoLqd3XPrnpd2+6yE0kSTwWepronWZdVSxUUwFsUVTcRzsJiD
// pU1d7WOxWwJBANqUHvu9IMq2vsi4RDA7bZ20AIs3bA+8bKYspbWnH/yRau96Q1KX
// y4GJFUDlCb0lnOICkNGe8eHGkJgQuMSOQTsCQHQ6HadDfbGnOo0E8I7vO8AlnYHF
// wV+x+Uau8p17u5D5SwFvwmi9diAIzymwbJ3Ra+MAwLf4mW4w9hGA6AhtkMcCQQCj
// BjbVq4n5p7NEIas6DhkDtm1xaDTAx9iBWGt/wNaqmgsX8iikQXMXehbQAAPzf0oz
// h5ZbwiDGNENEJ7SnZTJhAkEAkHkoQKwwv6Xqx8oxr+A/4tBE+pe+LxDCiDFDqjsb
// MNnWIg65+Xw0RXKhYoHib+TQ9Z8bC9OsZKX8f5GFWVCgUA==
// -----END RSA PRIVATE KEY-----
// `);
// var uncrypted = decrypt.decrypt(encrypted);

// console.log(uncrypted);

var crypt = new JSEncrypt();

crypt.setKey(`-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQDU766o6xkS8FLuLvXerfDBgPz3Opsq9tQrwDmKsQaQwEBX1UtR
3C6zQh6S+C1OyKFb/WHgsQqAA55asTV9Hezk+IghyiYX0JHdI8AvH5sI5xtMI6LN
5YEvAtBhreiwpOJMnst+XWMFY2LVrDigqj6+O9Iwl3N9qi98XNhqEnv6+QIDAQAB
AoGBALfCZDt4L7pNVXQhaKOT/lovo58Dn5bzTeS3zbCn1t+iWaSy+H4bgt3F6Lay
n/8GW2IUh5wtjL8u4ECp/1wLMDxReA74sbRrxPSi0WvmV+09YmvI8j4ds7QNYsju
KEJh37IYPWw8hESUU5nExdOxf1EMpxMaS+FO49aHm7xKarSVAkEA+WREtRYTrEIu
2vld2Rc7MbkOFZoFoLqd3XPrnpd2+6yE0kSTwWepronWZdVSxUUwFsUVTcRzsJiD
pU1d7WOxWwJBANqUHvu9IMq2vsi4RDA7bZ20AIs3bA+8bKYspbWnH/yRau96Q1KX
y4GJFUDlCb0lnOICkNGe8eHGkJgQuMSOQTsCQHQ6HadDfbGnOo0E8I7vO8AlnYHF
wV+x+Uau8p17u5D5SwFvwmi9diAIzymwbJ3Ra+MAwLf4mW4w9hGA6AhtkMcCQQCj
BjbVq4n5p7NEIas6DhkDtm1xaDTAx9iBWGt/wNaqmgsX8iikQXMXehbQAAPzf0oz
h5ZbwiDGNENEJ7SnZTJhAkEAkHkoQKwwv6Xqx8oxr+A/4tBE+pe+LxDCiDFDqjsb
MNnWIg65+Xw0RXKhYoHib+TQ9Z8bC9OsZKX8f5GFWVCgUA==
-----END RSA PRIVATE KEY-----
`);