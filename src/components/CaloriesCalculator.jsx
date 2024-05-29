import React from 'react'
import './CaloriesCalculator.css'

function CaloriesCalculator() {
    const searchMeal = async (e) =>{
        e.preventDefault();
    
        const input = document.querySelector('.input')
        const title= document.querySelector('.title')
        const info = document.querySelector('.info')
        const img = document.querySelector('.img')
        const ingredientsOutput = document.querySelector('.ingredients')
    
    
        const showMealInfo = (meal) =>{
            const {strMeal,strMealThumb,strInstructions} = meal;
            title.textContent = strMeal
            img.style.backgroundImage = `url(${strMealThumb})`
            info.textContent = strInstructions
    
            const ingredients = []
    
            for(let i =1;i<=20;i++){
                if(meal[`strIngredient${i}`]){
                    ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
                }else{
                   break;
                }
            }
    
            const html = `<span>${ingredients.map((ing) => `<li class="ing">${ing}</li>`).join("")}</span>`
    
            ingredientsOutput.innerHTML = html;
        }
        const showAlert = () =>{
            alert('Meal not found:')
        }
    
        const fetchMealData = async (val) =>{
    
            //themealdb.com api 
           const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
    
           const {meals} = await res.json();
           return meals;
        };
        //Get the user value
        const val = input.value.trim()
    
        if(val) {
            const meals = await fetchMealData(val) 
    
            if(!meals){
                showAlert()
                return;
            }
    
            meals.forEach(showMealInfo)
        }else{
            alert(
            "Please try searching for meal:"
            )
        }
    
    }
    
    
    const form = document.querySelector('form');
    form.addEventListener('submit',searchMeal)
    
    const magnifier = document.querySelector('.magnifier')
    magnifier.addEventListener('click',searchMeal)
  return (
    <div>
       <nav>
        <form className="input-container">
            <input type="text" className="input" placeholder="search..."/>
            <a onClick={searchMeal}><i className="fa-solid fa-magnifying-glass magnifier"></i></a>
        </form>

        <ul>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
        </ul>
    </nav>

    <main>
        <div className="container">
            <div className="img"></div>

            <div className="content-container">
                <h1 className="title">Food Name</h1>
                <p className="info">
                    Fluffy and golden pancakes served with a drizzle of rich maple syrup. Often accompanied by a pat of butter melting on top, fresh berries, and a sprinkle of powdered sugar.
                </p>
                <button className="main-btn">$20 - Order Now</button>
            </div>
        </div>
    </main>
    <section className="ingredients"></section>
    </div>
  )
}

export default CaloriesCalculator
