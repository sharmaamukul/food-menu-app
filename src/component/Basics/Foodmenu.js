import React, { useState } from 'react';
import './style.css';
import Menu from './menuapi.js'
import  Menucard  from './Menucard';

 const Foodmenu = () => {
    const [menuData, setMenuData]= useState(Menu);
    const filterItem=(category)=>{ 
      const updatedList=Menu.filter((curele)=>{
        return curele.category === category; 
      });
      setMenuData(updatedList);
    };
  return (
    <>
    <div>
    <nav className='navbar'> 
    <div className='btn-group'></div>
    <button className='btn-group__item' onClick={()=> filterItem("breakfast")}>Breakfast</button>
    <button className='btn-group__item' onClick={()=> filterItem("lunch")}>Lunch</button>
    <button className='btn-group__item' onClick={()=> filterItem("evening")}>Evening</button>
    <button className='btn-group__item' onClick={()=> filterItem("dinner")}>Dinner</button>
    <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button>
    </nav>
    </div>
    <Menucard menuData={menuData}/>
    </>
  );
};
export default Foodmenu;
