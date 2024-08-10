const accountId = 144553
let accountEmail = "ishank@gmail.com"
var accountPassword = "1234"
acountCity = "Jaipur"
let accountstate;

// accountId = 2 // NOt Allowed

accountEmail = "Id@accountEmail.com"
accountPassword = "21212"
acountCity = "nagpur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,acountCity,accountstate])
