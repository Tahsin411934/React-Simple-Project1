import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import HandleWantToCookBtn from './Components/HandleWantToCookBtn/HandleWantToCookBtn'
import Header from './Components/Header/Header'
import RecipeHeading from './Components/Recipes/RecipeHeading'
import Recipes from './Components/Recipes/Recipes'

function App() {
  
  const [wantToCookItems, setWantToCookItems]=useState([])


  const handleAddToCook=(recipe)=>{
    const addwantToCookItems=[...wantToCookItems,recipe]
     const isExit=wantToCookItems.find(item=>item.id==recipe.id)
     if (!isExit) {
      setWantToCookItems(addwantToCookItems)
     }
     else{
      alert('clicked same item')
     }
     
    
  }
console.log(wantToCookItems)
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipeHeading></RecipeHeading>
      <div className='container mx-auto flex gap-3'>
        <Recipes handleAddToCook={handleAddToCook}></Recipes>
       <HandleWantToCookBtn wantToCookItems={wantToCookItems}></HandleWantToCookBtn>
        
        
      </div>
    </>
  )
}

export default App
