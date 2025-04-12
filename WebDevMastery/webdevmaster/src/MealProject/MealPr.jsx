import React, { useEffect, useState } from "react";
// importing css
import "./MealPr.css";

const MealPr = () => {
  // creating state variable and method to save data that coming from api
  const [mealData, setMealData] = useState([]);
    // create to store the country
    const [country, setCountry] = useState('indian')  
    // console.log(country);
    

  // useEffect
  useEffect(() => {
    const apiFetch = async () => {
      // fetching data
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
        
      );
      // converting the data to json format
      const data = await response.json();
      // console.log(data.meals);
      // saving the data into the mealData state using the setMealData
      setMealData(data.meals);
    };
    // calling the apiFtech function
    apiFetch();
  }, [country]);  // sob here need to pass the country state so it update the api result accordingly



  return (
    <>
      <h1>MealPr</h1>

                <div className='menu-container'> 
                    <button type="button" className="btn-menu btn btn-primary" onClick={()=>setCountry('indian')}>Indian</button>
                    <button type="button" className="btn-menu btn btn-secondary" onClick={()=>setCountry('american')}>American</button>
                    <button type="button" className="btn-menu btn btn-success" onClick={()=>setCountry('russian')}>Russian</button>
                    <button type="button" className="btn-menu btn btn-danger" onClick={()=>setCountry('thai')}>Thai</button>
                    <button type="button" className="btn-menu btn btn-danger" onClick={()=>setCountry('chinese')}>Chinese</button>
                    <button type="button" className="btn-menu btn btn-danger" onClick={()=>setCountry('japanese')}>Japanese</button>
                </div>

      <div className="main-container">
        {/* here we use map to all the data that store in our state variable i.e mealData */}
        {mealData.map((eachMeal) => (
          <div key={eachMeal.idMeal} className="meal-img">
              <img src={eachMeal.strMealThumb} alt={eachMeal.strMeal} style={{width:'200px', borderRadius: '10px'  }}/>
              <h4>{eachMeal.strMeal}</h4>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default MealPr;
