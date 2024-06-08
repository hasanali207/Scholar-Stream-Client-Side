import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxioxSecure';
import Swal from 'sweetalert2';



const ScholarshipForm  = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure()


  const onSubmit = async (data) => {
    console.log(data);
    
    axiosSecure.post(`/items`, data)
      .then(() => {
        Swal.fire({
          title: "Applied Successfully",
          text: "Applied Success & record this!",
          icon: "success",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Okay!"
        });
        
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
      });

    
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB_API}`, formData);
    return response.data.data.url;
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-3 gap-4'>
      <div className='form-control w-full'>
        <label>Scholarship Name</label>
        <input {...register('scholarshipName', { required: true })} className="input input-bordered w-full" />
        {errors.scholarshipName && <span>This field is required</span>}
      </div>

      <div>
        <label>University Name</label>
        <input {...register('university_name', { required: true })} className="input input-bordered w-full" />
        {errors.universityName && <span>This field is required</span>}
      </div>

      <div>
        <label>University Image/Logo</label>
        <input type="file" onChange={async (e) => {
          const imageUrl = await uploadImage(e);
          register('university_image', { value: imageUrl });
        }} />
        {errors.universityImage && <span>This field is required</span>}
      </div>

      <div>
        <label>University Country</label>
        <input {...register('universityCountry', { required: true })}  className="input input-bordered w-full"/>
        {errors.universityCountry && <span>This field is required</span>}
      </div>

      <div>
        <label>University City</label>
        <input {...register('universityCity', { required: true })} className="input input-bordered w-full" />
        {errors.universityCity && <span>This field is required</span>}
      </div>

      <div>
        <label>University World Rank</label>
        <input type="number" {...register('universityWorldRank', { required: true })} />
        {errors.universityWorldRank && <span>This field is required</span>}
      </div>

      <div>
        <label>Subject Category</label>
        <select {...register('subjectCategory', { required: true })} className="select select-bordered w-full">
          <option  disabled selected >Select A Category</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Engineering">Engineering</option>
          <option value="Doctor">Doctor</option>
        </select>
        {errors.subjectCategory && <span>This field is required</span>}
      </div>

      <div>
        <label>Scholarship Category</label>
        <select {...register('scholarshipCategory', { required: true })} className="select select-bordered w-full">
        <option  disabled selected >Select A Category</option>
          <option value="Full fund">Full fund</option>
          <option value="Partial">Partial</option>
          <option value="Self-fund">Self-fund</option>
        </select>
        {errors.scholarshipCategory && <span>This field is required</span>}
      </div>

      <div>
        <label>Degree</label>
        <select {...register('degree', { required: true })} className="select select-bordered w-full">
        <option  disabled selected >Select A Category</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Masters">Masters</option>
        </select>
        {errors.degree && <span>This field is required</span>}
      </div>

      <div>
        <label>Tuition Fees (Optional)</label>
        <input type="number" {...register('tuitionFees')} />
      </div>

      <div>
        <label>Application Fees</label>
        <input type="number" {...register('applicationFees', { required: true })} />
        {errors.applicationFees && <span>This field is required</span>}
      </div>

      <div>
        <label>Service Charge</label>
        <input type="number" {...register('serviceCharge', { required: true })} />
        {errors.serviceCharge && <span>This field is required</span>}
      </div>

      <div>
        <label>Application Deadline</label>
        <input type="date" {...register('applicationDeadline', { required: true })} className="input input-bordered w-full"/>
        {errors.applicationDeadline && <span>This field is required</span>}
      </div>

      <div>
        <label>Scholarship Post Date</label>
        <input type="date" {...register('scholarshipPostDate', { required: true })}className="input input-bordered w-full" />
        {errors.scholarshipPostDate && <span>This field is required</span>}
      </div>

      <div>
        <label>Posted User Email</label>
        <input type="email" {...register('postedUserEmail', { required: true })} />
        {errors.postedUserEmail && <span>This field is required</span>}
      </div>

      <button className="btn btn-outline" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ScholarshipForm ;
