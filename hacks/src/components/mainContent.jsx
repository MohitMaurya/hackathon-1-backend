import React from 'react'
import { useEffect, useState,useContext } from 'react';
import axios from "axios"
import product_card from "../data/product_data"
import { ProductContext } from '../context/ProductContext';



const MainContent = () => {
    const { fetchdata } = useContext(ProductContext);
    const [users, setUsers] = useState("");

   
    
    const handleCart = (e) => {
        console.log(e);
        
    }
    
    



    {console.log(fetchdata)}
    const listItems =fetchdata.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div onClick={() => { handleCart(item) }} className="btn">Add to cart</div>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            
                   
               
            <h3> Hackathon__</h3>
                {listItems}
                    
           

            
           
            
            
        </div>
    )
}
export default MainContent;