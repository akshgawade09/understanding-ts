function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
	const result = n1 + n2;
	const addition = cb(result);
	console.log("Addition is: ", addition);
}

addAndHandle(5, 6, (result) => {
	return result;
});
