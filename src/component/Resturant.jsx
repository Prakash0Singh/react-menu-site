import React from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import { useState } from 'react'
const Resturant = () => {
   const [menuData,setMenu]=useState(Menu);

   const filterItem=(category)=>{
    const updatedList=Menu.filter((curElem)=>{
        return curElem.category=== category;
    })
    setMenu(updatedList);
   }; 
  return(    
    <>
    <div className="banner-container">
        <img
          src="https://img.freepik.com/free-vector/cartoon-indian-restaurant-background_52683-69329.jpg?w=1380&t=st=1660628427~exp=1660629027~hmac=83f3e87f50ca4417186e21548d747e7ebfc0eb44c56414595d062c944dcbe1c2"
          alt="banner for site"
        />
      </div>

      <nav className='navbar navbar-2'>
        <div className="btn-group mx-auto">
          <button className='btn-group__item' onClick={()=>filterItem("breakfast")}> Breakfast</button>
          <button className='btn-group__item' onClick={()=>filterItem("lunch")}> Lunch</button>
          <button className='btn-group__item' onClick={()=>filterItem("evening")}> Evening</button>
          <button className='btn-group__item' onClick={()=>filterItem("dinner")}> Dinner</button>
          <button className='btn-group__item' onClick={()=>setMenu(Menu)}> All</button>
        </div>
      </nav>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant