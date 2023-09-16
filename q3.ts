// var js:string = "junaid Sabri"
// console.log("My name is",js);

//question no 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string="HAJI"
var lowerpersonname=personName.toLowerCase()
console.log(lowerpersonname)

let personName1:string="Haji Ali"
let uppercase=personName1.toUpperCase()
console.log(uppercase)

var friends:string="kashi adnan asif waseem ali Hamamd   zeeshan salamat imran"
var arrayofFriends:string[]=friends.split(" ")
var tiTlecaseFriends:string=""
for (let i = 0; i < arrayofFriends.length; i++) 
{
tiTlecaseFriends+=arrayofFriends[i].charAt(0).toUpperCase()+arrayofFriends[i].slice(1).toLowerCase()+" ";
    
}
console.log(tiTlecaseFriends)
