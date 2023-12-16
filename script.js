function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0; i<str.length-1; i++) {
		if(str.indexOf(str.charAt(i) === str.lastIndexOf(str.charAt(i)))) {
			console.log(str.charAt(i));
			return;
		}
		}
		
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
