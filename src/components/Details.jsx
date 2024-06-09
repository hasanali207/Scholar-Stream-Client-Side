import React from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';

const Details = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const item = useLoaderData();
    const {scholarshipName, university_name, university_image, universityCountry, universityCity, universityWorldRank, subjectCategory, scholarshipCategory, degree, tuitionFees, applicationFees, serviceCharge, applicationDeadline, scholarshipPostDate, _id } = item
    const {user} = useAuth()
   

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
            <p>Category: {scholarshipCategory}</p>
            <p>Publish: {scholarshipPostDate}</p>
            <p>Country: {universityCountry}</p>
            <p>City: {universityCity}</p>
            <p>Deadline: {applicationDeadline}</p>
            <p>Subject Category: {subjectCategory}</p>
            <p>Application Fees: {applicationFees}</p>
            
            
            <Link to={`/ApplyScholar/${_id}`} onClick={handleScholar}>
                <button  className='btn btn-outline my-4'>Apply Scholarship</button>
            </Link>
        </div>
</div>
        
    );
};

export default Details;
