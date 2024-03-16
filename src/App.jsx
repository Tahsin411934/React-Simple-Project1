import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import HandleWantToCookBtn from "./Components/HandleWantToCookBtn/HandleWantToCookBtn";
import Header from "./Components/Header/Header";
import RecipeHeading from "./Components/Recipes/RecipeHeading";
import Recipes from "./Components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HandleCookingBtn from "./Components/HandleCookingBtn/HandleCookingBtn";

function App() {
  const [wantToCookItems, setWantToCookItems] = useState([]);
  const [cookItems, setCookItems] = useState([]);




  const handleAddToCook = (recipe) => {
    const addwantToCookItems = [...wantToCookItems, recipe];
    const isExit = wantToCookItems.find((item) => item.id == recipe.id);
    if (!isExit) {
      setWantToCookItems(addwantToCookItems);
    } else {
      toast("Already added item!");
    }
  };


  




  const handleCokingBtn = (wantToCookItem) => {
    setCookItems([...cookItems, wantToCookItem]);
    const setItem = wantToCookItems.filter(
      (item) => item.id != wantToCookItem.id
    );
    setWantToCookItems(setItem);
  };

  console.log(cookItems);

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipeHeading></RecipeHeading>
      <div className="container mx-auto lg:flex gap-3"> 
        <Recipes handleAddToCook={handleAddToCook}></Recipes>
        <div className="lg:w-2/5">
          <HandleWantToCookBtn
            wantToCookItems={wantToCookItems}
            handleCokingBtn={handleCokingBtn}
          ></HandleWantToCookBtn>
          <HandleCookingBtn  cookItems={cookItems}  ></HandleCookingBtn>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
