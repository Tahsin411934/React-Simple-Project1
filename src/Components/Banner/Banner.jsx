import "../../assets/Styles/Banner.css";
import bannerImage from "../../../public/Images/bannerImage.png";

const Banner = () => {
  return (
    <div className="h-[600px] gradient container mx-auto rounded-[2rem]">
      <div
        className="hero h-[600px] bg-cover rounded-[2rem] bg-no-repeat  bg-top"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className=" text-center text-neutral-content">
          <div className="max-w-max">
            <h1 className=" mb-10 text-5xl font-bold text-[#FFFFFF]">
              Discover an exceptional cooking
              <br /> <span>class tailored for you!</span>{" "}
            </h1>
            <p className=" mb-10 font-normal text-lg text-[#FFFFFF]">
              Experience culinary excellence with Kitchen Kick! Explore our wide
              range of premium kitchenware, from sleek <br /> gadgets to durable
              cookware. Elevate your cooking journey today!
            </p>
            <div>
              <button className="btn bg-[#0BE58A] mr-5 border-none">
                Explore Now
              </button>
              <button className="btn  border-2 border-[#FFFFFF] text-[#ffffff] rounded-3xl px-3">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
