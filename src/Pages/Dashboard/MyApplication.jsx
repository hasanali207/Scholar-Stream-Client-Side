import React from 'react'
import useScholarItems from '../../Hooks/useScholarItems'
import { FaDeleteLeft, FaEye, FaStreetView, FaUsersViewfinder } from 'react-icons/fa6'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useAxiosSecure from '../../Hooks/useAxioxSecure'
import Swal from 'sweetalert2'

const MyApplication = () => {
    const [scholaritems, refetch] = useScholarItems()
    const axiosSecure = useAxiosSecure()
    
    const handleDelete = (id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success"
          // });

          axiosSecure.delete(`/scholaritems/${id}`)
          .then(res => {
            if(res.data.deletedCount > 0){
              Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          refetch()
            }
          })
        }
      });


    }


  return (
    <div>

<div className="overflow-x-auto">
    <div className='flex justify-center'>
        <h1>Your Appllication: {scholaritems.length}</h1>
    </div>

  <table className="table text-sm w-full">
    {/* head */}
    <thead>
      <tr>
        <th>UN Name</th>
        <th>UN: Address</th>
        <th>App: Feedback</th>
        <th>Subject Cat:</th>
        <th>Apply Degree</th>
        <th>Apply Fees</th>
        <th>Services Charge</th>
        <th>Status</th>
        <th>Details</th>
        <th>Edit</th>
        <th>Cancel</th> 
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        scholaritems.map((item) =>   <tr key={item._id} >
            <td>{item.university_name}</td>
            <td>{item.university_address}</td>
            <td>Feedback</td>
            <td>{item.subjectCategory}</td>
            <td>{item.degree}</td>
            <td>{item.applicationFees}</td>
            <td>{item.serviceCharge}</td>
            <td>Pending</td>
            <td><Link  to={`/items/${item.itemId}`}><button className='btn btn-ghost'><FaEye></FaEye></button></Link></td>
            <td><Link to={`/dashboard/scholaritem/update/${item._id}`} ><button className='btn btn-ghost'><FaEdit></FaEdit></button></Link></td>
            <td><button onClick={()=>handleDelete(item._id)} className='btn btn-ghost'><FaTrashAlt></FaTrashAlt></button></td>            
            <td><button className='btn btn-outline'>Add Review  </button></td>
          </tr>)
    }
        
    </tbody>
  </table>
</div>

    </div>
  )
}

export default MyApplication