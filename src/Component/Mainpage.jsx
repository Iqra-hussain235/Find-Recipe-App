import React from 'react';
import Mealcards from './Mealcards';
import { useState } from 'react';
import './Mainpage.css';
const Mainpage = () => {
  const [data,setData]=useState();
  const [search,setSearch]=useState("");
 const [msg,setMsg]=useState(""); 

  const handleInput=(e)=>{
    setSearch(e.target.value);
    console.log(search);

  }

  const myFun=async ()=>{
    if(search == ""){
      setMsg("Please Enter  valid Dishe Name");
      setTimeout(() => {
        setMsg("");
      }, 2000);
      return;

    }
    else{

      const get=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData=await get.json();
      // console.log(jsonData.meals);
      setData(jsonData.meals);
    }
  }

  // console.log(data);
  return (
    <div>
      <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='container'>
        <div className='searchBar'>
            <input className='input' type='text' placeholder='Enter Dishe' onChange={handleInput}/>
           
            <button className='btn' onClick={myFun}><i className="fa-solid fa-magnifying-glass"></i></button>

        </div>
        <h4 className='error'>{msg}</h4>
        <div>
          <Mealcards details={data}/>
        </div>
      </div>

    </div>
  )
}

export default Mainpage;
