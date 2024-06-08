import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxioxSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useItems from "../../Hooks/useItems";


const AllScholarship = () => {
  const [items, refetch] = useItems()

  // const [items, setItems] = useState([]);
  // const axiosPublic = useAxiosPublic()
  // // const {university_name, university_image, scholarship_category, application_deadline, subject_category, application_fees, rating} = items
  //  useEffect(() => {
  //   axiosPublic('http://localhost:5000/items')
  //         .then(res => setItems(res.data))
          
  // }, [])


  return (
    <>
     <div className="grid grid-cols-3 gap-6 mt-10">
      
        {
          items.map(item => <div key={item._id} className="card border">
          <figure className=" border-b p-2">
            <img src={item.university_image} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.university_name}</h2>
            <p>{item.scholarship_category }</p>
            <div className="card-actions">
            <Link to={`/items/${item._id}`}>
                <button className="btn btn-outline my-4 ml-3">
                  View Details
                </button>
              </Link>
            </div>  
          </div>
        </div>)
        }
      </div> 
    
    </>
  )
}

export default AllScholarship