function printNumbers(n) {
	//n = 10
	for (let i = 1; i < n + 1; i = i + 1) {
		console.log(i);
	}
}

// Exemple de test
printNumbers(5); // Output attendu : 1, 2, 3, 4, 5
printNumbers(10); // 1,2 3 4 5 6 7 8 9 10
printNumbers(15); // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
