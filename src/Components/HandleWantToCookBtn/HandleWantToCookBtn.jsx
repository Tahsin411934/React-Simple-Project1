import PropTypes from "prop-types";


const HandleWantToCookBtn = ({ wantToCookItems ,handleCokingBtn }) => {
 



 

  return (
    <div >
      <h1 className="text-xl font-bold text-center mb-8 text-[#282828]">
        Want To Cook: {wantToCookItems.length}
        <hr className="w-[40%] border-solid border-b  border-[#2828281A] " />
      </h1>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base font-medium text-[#878787]">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {wantToCookItems.map((wantToCookItem, index) => (
              
              <tr key={wantToCookItem.id} className="bg-[#28282808] text-base font-normal" style={{color:"rgba(40, 40, 40, 0.7)"}}>
                <th>{index + 1}</th>
                <td>{wantToCookItem.name}</td>
                <td>{wantToCookItem.time} Minutes</td>
                <td>{wantToCookItem.calories} calories</td>
                <td>
                  <button onClick={()=>handleCokingBtn(wantToCookItem)} className="btn bg-[#0BE58A] text-[#150B2B] border-none">Cooking</button>
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
  wantToCookItems: PropTypes.array.isRequired,
  handleCokingBtn: PropTypes.func.isRequired,
};

export default HandleWantToCookBtn;
