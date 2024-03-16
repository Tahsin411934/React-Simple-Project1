import PropTypes from "prop-types";


const HandleWantToCookBtn = ({ wantToCookItems }) => {
 


 

 

  return (
    <div className="w-2/5">
      <h1 className="text-xl font-bold text-center mb-8 pt-16">
        Want To Cook{" "}
        {wantToCookItems.length > 10
          ? wantToCookItems.length
          : `0${wantToCookItems.length}`}
      </h1>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {wantToCookItems.map((wantToCookItem, index) => (
              
              <tr key={wantToCookItem.id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{wantToCookItem.title}</td>
                <td>{wantToCookItem.time} Minutes</td>
                <td>{wantToCookItem.calories} calories</td>
                <td>
                  <button className="btn bg-[#0BE58A]">Preparing</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

HandleWantToCookBtn.propTypes = {
  wantToCookItems: PropTypes.array,
};

export default HandleWantToCookBtn;
