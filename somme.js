function sumNumbers(n) {
	let somme = 0;

	for (let i = 0; i <= n; i = i + 1) {
		somme = somme + i;
	}

	return somme;
}

// Exemple de test
console.log(sumNumbers(5)); // Output attendu :
console.log(sumNumbers(15)); // 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 1 + 0 + 1 + 1 + 1 + 2 + 1 + 3 + 1 + 4 + 1 + 5
console.log(sumNumbers(33)); // 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20 + 20 + 21 + 22 + 23 + 24 + 25 + 26 + 27 + 28 + 29 + 30 + 31 + 32 + 33

