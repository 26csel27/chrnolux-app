document.getElementById("regEmail").value;
savedPassword = document.getElementById("regPassword").value;
if (savedName.trim() == "" || savedEmail.trim() == "" || savedPassword.trim() == "") {
alert("Please fill out all fields!");
return;
}
alert("Collector profile registered successfully!");
document.getElementById("loginEmail").value = savedEmail;
document.getElementById("loginPassword").value = savedPassword;
showLogin();
}
function loginUser() {
var typedEmail = document.getElementById("loginEmail").value;
var typedPassword = document.getElementById("loginPassword").value;
if (typedEmail.trim() === savedEmail.trim() && typedPassword === savedPassword) {
alert("Secure Vault Access Approved.");
document.getElementById("welcomeMessage").innerText = "Welcome back, " + savedName;
showDashboard();
} else {
alert("Invalid configuration security credentials.");
}
}
function logoutUser() {
alert("Locking down dashboard connection array...");
showLogin();
}
/* Dynamic Reactive Valuation Pipeline */
function buyWatch(watchName, precisePriceValue) {
activeCartCounter++;
runningPriceTotal += precisePriceValue;
// Format to standard localized currency layout strings
document.getElementById("cartCount").innerText = activeCartCounter;
document.getElementById("cartValue").innerText = "₹" + runningPriceTotal.toLocaleString('en-IN');
alert("Allocation Approved! " + watchName + " added to your secure account vault.");
}
/* Cart Reset Controller Pipeline */
function resetCart() {
activeCartCounter = 0;
runningPriceTotal = 0;
document.getElementById("cartCount").innerText = "0";
document.getElementById("cartValue").innerText = "₹0";
alert("Acquisition vault cart balance has been wiped back to zero states.");
}