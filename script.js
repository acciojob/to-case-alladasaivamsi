function toCase(text) {
  // write your code here
	const output = text.toLowerCase() + "-" + text.toUpperCase();
	return output;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
