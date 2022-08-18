import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
const MenuCard = ({ menuData }) => {
  return (
    <>
    
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <>
              <div key={curElem.id} className="card-container"  >
                <div className="card">
                  <div className="card-body">
                    {/* <span className="card-number card-circle subtle">{curElem.id}</span> */}
                    <span className="card-author subtle">{curElem.category}</span>
                    <h2 className="card-title">{curElem.name}</h2>
                    <div className="card-read">{curElem.price}</div>
                    <div className="image-box">
                      <img src={curElem.image} alt="" className='card-media'/>
                    </div>
                    <button className=" btn btn-sm btn-outline-secondary  mt-3">Order Now</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
