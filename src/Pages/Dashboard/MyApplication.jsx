import React from 'react'
import useScholarItems from '../../Hooks/useScholarItems'
import { FaDeleteLeft, FaStreetView, FaUsersViewfinder } from 'react-icons/fa6'
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

  <table className="table text-sm">
    {/* head */}
    <thead>
      <tr>
        <th>University Name</th>
        <th>UN: Address</th>
        <th>App: Feedback</th>
        <th>Subject Cat:</th>
        <th>Applied Degree</th>
        <th>Services Charge</th>
        <th>App: Satatus</th>
        <th>Details</th>
        <th>Edit</th>
        <th>Cancel</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        scholaritems.map((item) =>   <tr key={item._id} >
            <td>{item.university}</td>
            <td>{item.address}</td>
            <td>{item.Subject}</td>
            <td>{item.Subject}</td>
            <td>{item.Subject}</td>
            <td>{item.Subject}</td>
            <td>{item.Subject}</td>
            <td><Link  to={`/items/${item.scholarId}`}><button><FaUsersViewfinder></FaUsersViewfinder></button></Link></td>
            <td><button><FaEdit></FaEdit></button></td>
            <td><button onClick={()=>handleDelete(item._id)} className='btn btn-ghost'><FaTrashAlt></FaTrashAlt></button></td>            
            <button className='btn btn-outline'>Add Review  </button>
          </tr>)
    }
        
    </tbody>
  </table>
</div>

    </div>
  )
}

export default MyApplication