import React from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';

const Details = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const item = useLoaderData();
    
    const {user} = useAuth()
    const { university_name, university_image, university_location, scholarship_category, application_deadline, subject_category, application_fees, rating, _id } = item;

    const handleScholar =() => {
        if(user && user.email){

        }else{
            Swal.fire({
                title: "Please Login At First?",
                text: "You won't be able to Add this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Loged in!"
              }).then((result) => {
                if (result.isConfirmed) {
                //  send user to the login page 2 way  navigate & location
                navigate('/login', { state: { from: location } })
                }
              });
        }
    }


   
    return (
        
<div className='flex justify-center items-center'>
<div>
<figure className=" border p-2">
            <img src={university_image} alt="Shoes" className="" />
          </figure>
            <h2>{university_name}</h2>
            <p>Category: {scholarship_category}</p>
            <p>Deadline: {application_deadline}</p>
            <p>Country: {university_location.country}</p>
            <p>City: {university_location.city}</p>
            <p>Deadline: {application_deadline}</p>
            <p>Subject Category: {subject_category}</p>
            <p>Application Fees: {application_fees}</p>
            <p>Rating: {rating}</p>
            
            <Link to={`/addScholarship/${_id}`} onClick={handleScholar}>
                <button  className='btn btn-outline my-4'>Apply Scholarship</button>
            </Link>
        </div>
</div>
        
    );
};

export default Details;
