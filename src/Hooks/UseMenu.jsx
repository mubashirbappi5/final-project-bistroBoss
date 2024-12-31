import React, { useEffect, useState } from 'react';

const UseMenu = () => {
    const [menu,setmenu]=useState([])
        useEffect(()=>{
            fetch('menu.json')
            .then(res=>res.json())
            .then(data=>{
              
                setmenu(data)
            })
    
        },[])
        return [menu];
};

export default UseMenu;