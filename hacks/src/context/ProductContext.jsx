import React, { createContext,useState,useEffect} from "react"
import axios from "axios"

export const ProductContext = createContext({fetchdata:[]})
export const ProductProvider = ({ children }) => {
    const [fetchdata, setFetchdata] = useState([{}]);

    useEffect(() => {
       
            axios.get("http://localhost:2345/products")
                .then((res) => {
                    setFetchdata(res.data);
                    console.log(res.data,"piyush");
              
           
                })
        
    }, [])
    

    return (
        <ProductContext.Provider value={{fetchdata}}>
            {children}
        </ProductContext.Provider>
    )
    
    
}
