const brailleAlphabetLeftToRightRows = {// Binary value in Decimal
	a: [1,0,0,0,0,0],		// 32
	b: [1,0,1,0,0,0],		// 40
	c: [1,1,0,0,0,0],		// 48
	d: [1,1,0,1,0,0],		// 52
	e: [1,0,0,1,0,0],		// 36
	f: [1,1,1,0,0,0],		// 56
	g: [1,1,1,1,0,0],		// 60
	h: [1,0,1,1,0,0],		// 44
	i: [0,1,1,0,0,0],		// 24
	j: [0,1,1,1,0,0],		// 28
	k: [1,0,0,0,1,0],		// 34
	l: [1,0,1,0,1,0],		// 42
	m: [1,1,0,0,1,0],		// 50
	n: [1,1,0,1,1,0],		// 54
	o: [1,0,0,1,1,0],		// 38
	p: [1,1,1,0,1,0],		// 58
	q: [1,1,1,1,1,0],		// 62
	r: [1,0,1,1,1,0],		// 46
	s: [0,1,1,0,1,0],		// 26
	t: [0,1,1,1,1,0],		// 30
	u: [1,0,0,0,1,1],		// 35
	v: [1,0,1,0,1,1],		// 43
	w: [0,1,1,1,0,1],		// 29
	x: [1,1,0,0,1,1],		// 51
	y: [1,1,0,1,1,1],		// 55
	z: [1,0,0,1,1,1]		// 39
}

function brailleLetter (letterValue) {
  if (!brailleAlphabetLeftToRightRows[letterValue.toLowerCase()]) {
    throw 'InvalidLetterValue';
  }

	let letter = document.createElement("DIV");
		letter.classList = "letter";

	let letterHead = document.createElement("H5");
		letterHead.textContent = letterValue.toUpperCase();

		letter.appendChild(letterHead);

	let braille = document.createElement("SPAN");
		braille.classList = "braille-letter letter-" + letterValue;

	let dot;

	for (let i = 0; i < 6; i++) {
		dot = document.createElement("SPAN");

		if (brailleAlphabetLeftToRightRows[letterValue.toLowerCase()][i] === 1) {
			dot.classList = "raised";
		}

		braille.appendChild(dot);
	}

	letter.appendChild(braille);

	return letter;

	// var spa = document.createElement("SPAN")
	// var spb = document.createElement("SPAN")
	// var spc = document.createElement("SPAN")
	// var spd = document.createElement("SPAN")
	// var spe = document.createElement("SPAN")
	// var spf = document.createElement("SPAN")
}

/* 
  Binary value ordering of letters:

  i sjwt
  a k
  u 
  e
  o zblvhrcmxdn
  y fpgq
*/
