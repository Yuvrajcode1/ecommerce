import { createContext, useContext, useState } from "react";

export const Cartcontext = createContext(null);

export const Cartprovider = ({ children }) => {
    const [Cartitem, setCartitem] = useState([]);

    const Addcart=(items)=>{
      setCartitem([...Cartitem,items])
    }

    return <Cartcontext.Provider value={{ Cartitem, setCartitem,Addcart}}>
        {children}
    </Cartcontext.Provider>
}

export const Carts=()=>useContext(Cartcontext)