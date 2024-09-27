document.addEventListener('DOMContentLoaded', function() {
    const mealContainer = document.getElementById('meal-container');
    const alphabetContainer = document.getElementById('alphabet');
  
    // Voeg knoppen voor elke letter van het alfabet toe
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    alphabet.split('').forEach(letter => {
      const button = document.createElement('button');
      button.textContent = letter;
      button.addEventListener('click', () => {
        fetchMealsByLetter(letter);
      });
      alphabetContainer.appendChild(button);
    });
  
    // Functie om maaltijden op te halen op basis van de letter
    function fetchMealsByLetter(letter) {
      mealContainer.innerHTML = ''; // Wis bestaande maaltijden
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(response => response.json())
        .then(data => {
          const meals = data.meals;
  
          // Als er maaltijden zijn, loop door ze heen en toon ze
          if (meals) {
            meals.forEach(meal => {
              const mealDiv = document.createElement('div');
              mealDiv.classList.add('meal');
  
              mealDiv.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>${meal.strMeal}</h3>
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>
              `;
  
              mealContainer.appendChild(mealDiv);
            });
          } else {
            mealContainer.innerHTML = '<p>Geen maaltijden! Helaas.</p>';
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          mealContainer.innerHTML = '<p>Maaltijden niet kunnen laden. Womp womp.</p>';
        });
    }
  
    // Standaard: start met de letter 'A'
    fetchMealsByLetter('A');
  });
  