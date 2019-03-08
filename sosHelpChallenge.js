function sendHelp(sosString){

	// First of all, we must check if the string in input respects the constraints
    // If it does:
	if (checkString(sosString)) {
    
    	var rightString = '';
        
        // I create a variable which contains only the right message repeated 
        // the number of times whose input string is divisible by 3
        for (i = 0; i < sosString.length / 3; i++) {
        	rightString += 'SOS';
        }
        
        var compare = 0;
        
        // In the end, I check how many letters are different in the two strings
		for( i = 0; i < sosString.length; i++) {
    		if( rightString.charAt(i) !== sosString.charAt(i)) {
        		compare++;
			}
        }
        
        if (compare.length > 0){
        	console.log('Strings have ' + compare + ' different characters');
        } else {
        	alert('There are no differences between strings');
        }
    };
}

function checkString(stringToCheck){
	// String Length must be between 3 and 99 characters
	if (stringToCheck.length < 3 || stringToCheck.length > 99) {
    	console.log('Input string length must be between 3 and 99');
    }
    
    // String length must be multiple of 3
    if (stringToCheck.length % 3 !== 0) {
      console.log('Input string length must be multiple of 3');
    }
    
    //All string's character must be uppercase
    if (/^[a-zA-Z]+$/.test(stringToCheck)){
    	if (stringToCheck !== stringToCheck.toUpperCase()){
    		console.log('All letters must be uppercase');
            return false;
    	} else {
    		console.log('Input string respects constraints');
            return true;
    	}
    } else {
    	console.log('Input string must be only characters');
        return false;
    }
}
 
sendHelp('SOS');
