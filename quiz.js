function verifierReponse() {
    const reponsesCorrectes = ['a', 'b', 'b', 'a', 'c', 'b', 'a', 'a', 'c', 'a']; // Ajoutez les réponses correctes pour chaque question
  
    let nombreReponsesCorrectes = 0;
  
    for (let i = 1; i <= 10; i++) {
      const reponseUtilisateur = document.querySelector(`input[name="q${i}"]:checked`);
  
      if (reponseUtilisateur) {
        if (reponseUtilisateur.value === reponsesCorrectes[i - 1]) {
          nombreReponsesCorrectes++;
        }
      }
    }
  
    alert(`Vous avez ${nombreReponsesCorrectes} réponses correctes sur 10.`);
    alert(`reponse correcte : ${reponsesCorrectes} .`);

  }
  