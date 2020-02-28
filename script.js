var database = [
	{
		userName: "sylvester",
		password: "jengwa"
	},

	{
		userName: "sally",
		password: "123"
	},

	{
		userName: "tee",
		password: "778"
	},
];

var newsFeed = [
	{
		userName: "billy",
		timeline: "its too hot today"

	},

	{ 
		userName: "jully",
		timeline: "I love eating sanguages"
	},

	{
		userName: "prog",
		timeline: "javascript is so cool"
	}
];

var userNamePrompt = prompt("what\'s your username?");
var passwordPrompt = prompt("what\'s your password?");

function isUserValid(userName, password) {
	for (var i=0; i < database.length; i++) {
 		if (userName === database[i].userName && password === database[i].password) {
 			return true;
 		} 
 	}
 	return false;
 } 		

function signIn(userName, password) {
	if(isUserValid(userName, password)) {
		console.log(newsFeed);
	} else {
		alert("sorry wrong username and password!");	
	}
}

signIn(userNamePrompt, passwordPrompt);