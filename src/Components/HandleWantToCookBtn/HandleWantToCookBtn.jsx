import React from 'react'
import PropTypes from 'prop-types'

const HandleWantToCookBtn = () => {
  return (
    <div className='w-2/5'>
        <h1 className="text-xl font-bold text-center mb-8 pt-16">
          Want To Cook 01
        </h1>
      <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <button className='btn bg-[#0BE58A]'>Preparing</button>
      </tr>
      
    </tbody>
  </table>
</div>
    </div>
  )
}

HandleWantToCookBtn.propTypes = {

}

export default HandleWantToCookBtn
