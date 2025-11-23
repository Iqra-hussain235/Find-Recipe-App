import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Mealcards.css'
const Mealcards = ({details}) => {
    console.log(details)
  return (
    <div className='meals'>
      {!details ? <h1>Welcome .Enter Your fav Dish</h1> : details.map((item)=>{
        return(
            <div className='card' key={item.idMeal}>
                <img className='img' src={item.strMealThumb} alt='img'/>
                <h2 className='title'>{item.strMeal}</h2>
                {/* <h4 className='area'>Area : {item.strArea}</h4> */}
                <h4 className='category'>Category : {item.strCategory}</h4>
             
                <NavLink to={`/${item.idMeal}`}>
                    <button className='btn1'>Recipe</button>
                 </NavLink>
             
            </div>
        )
      })
      }
    </div>
  )
}

export default Mealcards;
