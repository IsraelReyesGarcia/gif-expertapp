import React, { useState } from 'react'
import { AddCategory } from './categories/AddCategory';
import { GifGrid } from './categories/GifGrid';

export const GifExpertApp = () => {
   // const categories = ['One Punch Man', 'Samurai Jack', 'Jimi Neutrón'];
    const [categories, setCategories] = useState(['One Punch Man']);
   // const handdleAdd = ()=>{
        //setCategories([...categories,'Holis']);
     //   setCategories(cats => [...cats,'Holis'])
   // }

    return (
    <>
     <div>GifExpertApp</div>
     <AddCategory setCategories={setCategories}/>
     <hr />
     
     {
        categories.map((category, i) => (
            <GifGrid 
               key={ category }
               category={ category }
            />
        ))
     }
    </>
  )
}
