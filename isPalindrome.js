var isPalindrome = function(x) {
	let result = 0;
	let save = x;
	while(save > 0) {
        result = result * 10 + (save % 10);
		save = Math.floor(save / 10);
	}
	return x === result;
};

console.log(isPalindrome(121))