import PropTypes from 'prop-types'
const HandleCookingBtn = ({cookItems}) => {

  const totalTime = cookItems.reduce(( preTotal, cookItem) => preTotal + cookItem.time, 0);
  const totalCalories = cookItems.reduce(( preTotalCalories, cookItem) => preTotalCalories + cookItem.calories, 0);
  return (
    <div>
      <h1 className="text-xl font-bold text-center mb-8 ">
      Currently cooking: {cookItems.length}
      </h1>
      <table className="table">
         
          <thead>
            <tr className='text-base font-medium text-[#878787]'>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookItems.map((cookItem, index) => (
              
              <tr key={cookItem.id} className="bg-base-200 text-base font-normal" style={{color:"rgba(40, 40, 40, 0.7)"}}>
                <th>{index + 1}</th>
                <td>{cookItem.title}</td>
                <td>{cookItem.time} Minutes</td>
                <td>{cookItem.calories} calories</td>  
              </tr>
            ))}
            <tr className="bg-base-200 text-base font-normal" style={{color:"rgba(40, 40, 40, 0.7)"}}>
            <td></td>
            <td></td>
            <td>Total time= {totalTime} Minutes</td>
            <td>Total time= {totalCalories} Calories</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

HandleCookingBtn.propTypes = {
    cookItems: PropTypes.array.isRequired
}

export default HandleCookingBtn
