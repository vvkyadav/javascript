const accountId = 144553
let accountEmail = "vyadav166@google.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;

// accountId = 2 // not allowed


accountEmail = "vvk@gmail.com"
accountPassword = "21212121"
accountCity = "New Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])