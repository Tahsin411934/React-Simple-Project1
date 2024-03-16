import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

const Recipe = ({ recipe,handleAddToCook }) => {
    
  const { image, title, description, ingredients, time, calories } = recipe;
  return (
    <div className="">
      <div className="card card-compact w-[100%] bg-base-100 shadow-xl">
        <img className="w-[100%] h-[12rem] mx-auto rounded-2xl" src={image} alt="Food Item Image" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-[#878787] text-base font-normal">{description}</p>
          <p className="card-title text-[#282828]">ingredients {ingredients.length}</p>
          <ul className="-mt-2 text-[#878787] text-lg font-normal">
          {
            ingredients.map(li=><li key={li} >{li}</li>)
          }
          </ul>
          
          
          <div className="flex justify-between items-center font-normal text-lg text-[#878787]">
            <p>
              <FaRegClock /> {time} minutes{" "}
            </p>
            <div className="flex justify-center items-center gap-1">
              <MdOutlineLocalFireDepartment />
              <p>{calories}</p>
            </div>
          </div>
          <button onClick={()=>{handleAddToCook(recipe)}} className="btn bg-[#0BE58A] text-[#150B2B] w-[50%] border-none rounded-3xl">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleAddToCook: PropTypes.func.isRequired,
};

export default Recipe;
