import React, { useState, useEffect } from "react"
import "./Apitest.css"

const Apitest = () => {
  

  return (
    <div className="data__card-container">
      
        {users.map((card) => (
          <div className="data_card-container__front-end" key={card.id}>
            <img alt="test" title="More Information Here" />
        <h4>Testing Title</h4>
        <p>Testing Text</p>
            </div>
        ))}
      </div>
      // {/* <div className="data_card-container__back-end"></div> */}
   
  )
}

export default Apitest
