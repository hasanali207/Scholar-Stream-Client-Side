import React from 'react'
import useReviews from '../../Hooks/useReviews'
import Rating from 'react-rating'
import { FaTrashAlt } from 'react-icons/fa'
import useAxiosSecure from '../../Hooks/useAxioxSecure'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import Swal from 'sweetalert2'

const AllReviews = () => {
  const [reviews, refetch] = useReviews()
  const axiosSecure = useAxiosSecure()

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/allreviews/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };




  return (
    <div>{reviews.length}
      <div>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>UN Name</th>
        <th>ScholarshipName</th>
        <th>Image</th>
        <th>Name</th>
        <th>Review Date</th>
        <th>Rating</th>
        <th>Comment</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {reviews.map(item => <tr key={item._id} className="bg-base-200">
        <td>{item.university_name}</td>
        <td>{item.scholarshipName}</td>
        <td><img className='w-20 h-20 object-cover rounded-lg' src={item.user_image} alt="" /></td>
        <td>{item.currentDate}</td>
        <td>{item.user_name}</td>
        <td><Rating
        initialRating={item.rating}
        readonly={true}
        emptySymbol={<FaRegStar></FaRegStar>}
        fullSymbol={<FaStar className='text-yellow-500'></FaStar>}
      /></td>
        <td>{item.review_comment}</td>
        <td><button onClick={() => handleDelete(item._id)} className="btn btn-ghost">
                    <FaTrashAlt />
                  </button></td>
        
      </tr>)}
         
    </tbody>
  </table>
</div>
      </div>
    
    </div>
  )
}

export default AllReviews