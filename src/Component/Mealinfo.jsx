import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import './Mealinfo.css'



const Mealinfo = () => {
  const {mealid} = useParams(); 
  console.log(mealid);

  const [info,setInfo] =useState();
  console.log(mealid);
  const getInfo = async()=>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
    const data = await res.json();
    console.log(data.meals[0]);
    setInfo(data.meals[0]);
  }
  if(info != ""){
    getInfo();
  }
  return (
    <div className='meals'>
      {
      !info ? <h1>Not Found...</h1> :
      
        <div className='mealInfo'>
          <h1>Recipe Details</h1>
          <button>{info.strMeal}</button>
          <img src={info.strMealThumb} alt='img'/>
          <div className='info'>
          <h2>Category : {info.strCategory}</h2>
          <h2>Area : {info.strArea}</h2>
          <h3>Instruction's</h3>
          <p>{info.strInstructions}</p>
          <a href={info.strYoutube} target='_blank' rel="noreferrer">Watch Video</a>
        </div>
        </div>
      }
    </div>
    
    
  )
}

export default Mealinfo;
