import PropTypes from 'prop-types'

const HandleCookingBtn = ({cookItems}) => {
    
    console.log(cookItems)
  return (
    <div>
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
            {cookItems.map((cookItem, index) => (
              
              <tr key={cookItem.id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{cookItem.title}</td>
                <td>{cookItem.time} Minutes</td>
                <td>{cookItem.calories} calories</td>  
              </tr>
            ))}
            <td></td>
            <td></td>
            <td>Total time= 420 Minutes</td>
          </tbody>
        </table>
    </div>
  )
}

HandleCookingBtn.propTypes = {
    cookItems: PropTypes.array.isRequired
}

export default HandleCookingBtn
