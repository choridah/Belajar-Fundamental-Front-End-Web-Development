import '../components/search-bar.js';
import DataSource from '../components/data-source.js';

function main() {
    const baseUrl = "https://themealdb.com/api/json/v1/1/search.php?s=";
    const getMeal = async () => {
        try {
            const response = await fetch(`${baseUrl}`);
            const responseJson = await response.json();
            renderAllMeals(responseJson.meals);
        } catch(error) {
            showResponseMessage(error);
        }
    }

    const renderAllMeals = (meals) => {
        const listMealElement = document.querySelector("#listMeal");
        listMealElement.innerHTML = "";
        for(let i = 0; i<5;i++){
            listMealElement.innerHTML += `
                <div class="item shadow">
                    <div class="inner">
                        <h2><b>${meals[i].strMeal}</b></h2>
                        <h6>from ${meals[i].strArea}</h6><b><hr></b>
                        <p>${meals[i].strInstructions}</p>
                    </div>
                </div>
            `;
        }
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getMeal();
    });

    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("#listMealOne");
    
    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchMeal(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };
    
    const renderResult =  results => {
        results.forEach(result => {
            mealListElement.innerHTML = ""
            mealListElement.innerHTML += `
                <div class="item shadow">
                    <div class="inner"> 
                        <h2><b>${result.strMeal}</b></h2>
                        <h6>from ${result.strArea}</h6><b><hr></b>
                        <p>${result.strInstructions}</p>
                    </div>
                </div>`;
        })
    };
    
    const fallbackResult = message => {
       mealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
}
export default main;