import "../../assets/Styles/Banner.css";
import bannerImage from "../../../public/Images/pexels-gary-barnes-6249032.jpg";

const Banner = () => {
  return (

    <div className="border-solid border-2 border-sky-500 h-[650px] gra container mx-auto rounded-[2rem]">
      <div
        className="hero h-[650px] bg-cover rounded-[2rem] bg-no-repeat grad bg-top"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
      <div className=" text-center text-neutral-content">
        <div className="max-w-max">
        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking<br /> <span>class tailored for you!</span> </h1>
        <p className="mb-5 inter-font font-normal text-lg">TravelSwift: Your Premier Destination for Seamless Ticket Booking and Travel Planning.<br />Explore, Book, and Go with Ease on the Ultimate Travel Companion ..</p>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
