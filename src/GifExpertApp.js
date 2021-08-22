import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One punch']);

    return (
        <>
           <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
           <hr></hr> 
            
           {
               <ol>
                   {categories.map((category=>{
                return <GifGrid 
                       category={category}
                       key={category}
                       />
                   }))}
               </ol>
           }
        </>
    )
}
