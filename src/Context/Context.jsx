import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const usercontext = createContext(null);
export const addtocartContext = createContext(null);

const Context = (props) => {
  const [cartitem, setcartitem] = useState({});

  const addtocart = (itemid)=>{
    if(!cartitem[itemid]){
      setcartitem((prev)=>({...prev,[itemid]:1}))
    }
    else{
      setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }
  }
  const removefromCart = (itemid)=>{
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))

  }
  useEffect(()=>{
    console.log(cartitem,"this is cart item");
  },[cartitem])

  const [foodlist, setfoodlist] = useState(food_list);
  const addtocartvalue = {
    cartitem,
    setcartitem,
    addtocart,
    removefromCart
  }

  return (
    <usercontext.Provider value={[foodlist, setfoodlist]}>
    <addtocartContext.Provider value={addtocartvalue}>
    {props.children}
    </addtocartContext.Provider>
    </usercontext.Provider>
  );
};

export default Context;
