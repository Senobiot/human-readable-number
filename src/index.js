module.exports = function toReadable (number) {
  	let obj = {0: "zero", 1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine", 10:"ten",
               11:"eleven", 12:"twelve", 13:"thirteen", 14: "fourteen", 15:"fifteen", 20:"twenty", 30:"thirty", 40:"forty", 50: "fifty"};

	if (number >= 100) {
		if (number % 100 === 0) {
			return obj[Math.trunc(number/100)] + " hundred"
    	} else {
			return obj[Math.trunc(number/100)] + " hundred" + " " + lessHundred(number - Math.trunc(number/100)*100)
     	}
	} else {
			return lessHundred(number)
	}

function lessHundred(arg) {
	return  arg <= 15 ? obj[arg] : 
			arg === 18 ? obj[arg - 10] + "een":
			arg < 20 ? obj[arg - 10] + "teen":
			arg <= 59 && arg % 10 === 0? obj[arg]:
			arg <= 59 ? obj[Math.trunc(arg/10)*10] + " " + String(obj[arg - Math.trunc(arg/10)*10]):
			arg === 80 ? obj[arg/10] + "y":
			arg > 80 && arg < 90 ? obj[Math.trunc(arg/10)] + "y" + " " + String(obj[arg - Math.trunc(arg/10)*10]):
			arg < 100 && arg % 10 === 0 ? obj[arg/10] + "ty":
			arg < 100 ? obj[Math.trunc(arg/10)] + "ty" + " " + String(obj[arg - Math.trunc(arg/10)*10]):
      		"!Something wrong!";
  } 
}
