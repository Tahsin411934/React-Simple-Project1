const RecipeHeading = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-4xl font-bold text-center mb-8 pt-16 text-[#150B2B]">
            Our Recipes
          </h1>
          <p
            className="text-lg font-normal text-center mb-16 lg:w-3/5 m-auto"
            style={{ color: "rgba(21, 11, 43, 0.6)" }}
          >
            Discover culinary delights with our diverse array of recipes. From
            mouthwatering mains to delectable desserts, elevate your home
            cooking experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeading;
