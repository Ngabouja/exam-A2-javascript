/**
 *
 * @param {string} word
 * @returns
 */
function capitalizeWord(word) {
	return word.split(" ");
}

/**
 * 
 * @param {HTMLDivElement} carreElement 
 */
function modifierCouleurCarre(carreElement) {
	carreElement.classList.add("red");
}

// Exemple de test
console.log(capitalizeWord("je suis Noah.")); // Output attendu : "JAVASCRIPT"
