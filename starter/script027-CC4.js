/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const bmi = {
    poidMark: prompt("Le poids de Mark ?"),
    tailleMark: prompt("La taille de Mark ?"),
    poidJohn: prompt("Le poids de John"),
    tailleJohn: prompt("La taille de John"),

    bmiMark() {
        return this.poidMark / this.tailleMark^2
    },
    bmiJohn() {
        return this.poidJohn / this.tailleJohn^2
    },

    comparaison() {
        if (this.bmiMark() > this.bmiJohn()) {
            return "Mark a le bmi le plus élevé."
        } else if (this.bmiMark() < this.bmiJohn()) {
            return "John a le bmi le plus élevé"
        } else {
            return "Mark et John ont le même bmi"
        }
    }

}

console.log(bmi.comparaison())





