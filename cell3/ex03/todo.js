console.log(navigator.cookieEnabled);
document.cookie = 'firstName=Kyle; sameSite=none; Secure';
document.cookie = "lastName=Patata; sameSite=none; Secure";
console.log(document.cookie);
console.log(document.cookie);