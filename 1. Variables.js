// function storeValue(value) {
//     return value
//   }

//   // Exemple de test
//   console.log(storeValue("Bonjour")); // Output attendu : "Bonjour"

function detectPlusPetit(nombre1, nombre2) {
	// nombre1 = 0, nombre2 = 1
	/*if (nombre1 < nombre2) {
		return nombre1;
	} else if (nombre2 < nombre1) {
		return nombre2;
	} else if (nombre1 == nombre2) {
		return nombre2;
	}*/

	if (nombre1 < nombre2) {
		return nombre1;
	} else if (nombre1 > nombre2) {
		return nombre2;
	} else if (nombre1 == nombre2) {
		return nombre2;
	}
}

let resultat = detectPlusPetit(0, 1); // resultat = 0
console.log(resultat);
resultat = detectPlusPetit(10, 20); // resultat = 10
console.log(resultat);
resultat = detectPlusPetit(152, 152); // resultat = 152
console.log(resultat);
resultat = detectPlusPetit(187415, 2566); // resultat = 2566
console.log(resultat);
