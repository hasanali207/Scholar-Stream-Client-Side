import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import useScholarItems from '../../Hooks/useScholarItems';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxioxSecure';

function AddScholarShip () {
  const { user } = useAuth();
  const [scholarItems, refetch] = useScholarItems();
  const { id: itemId } = useParams();  
  const axiosSecure = useAxiosSecure();
  const defaultValues = {
    user_email: user?.email || '',
    user_name: user?.displayName || '',
    university: '',
    Category: '',
    Subject: ''
  };



  
  const [items, setItems] = React.useState(null);

  useEffect(() => {
    
    fetch(`http://localhost:5000/singleItem/${itemId}`)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching item:', error));
  }, [itemId]);

  const { control, register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues
  });

  useEffect(() => {
   
    if (items) {
      reset({
        ...defaultValues,
        university: items.university_name || '',
        Category: items.scholarship_category || '',
        Subject: items.subject_category || '' 
      });
    }
  }, [items, reset]);

  

  const onSubmit = async (data) => {
    // Include the itemId in the data being submitted
    const dataWithId = { ...data, itemId };

    axiosSecure.post(`/scholarfromuser`, dataWithId)
      .then(() => {
        Swal.fire({
          title: "Applied Successfully",
          text: "Applied Success & record this!",
          icon: "success",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Okay!"
        });
        refetch();
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
      });
  };

  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className='py-12 flex items-center justify-center'>
        <h2 className='text-3xl font-bold'>Provide Information</h2>
        <p>{scholarItems.length}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-3 gap-3'>
          <div className=''>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" {...register("phone", { required: true })} />
            {errors.phone && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input type="text" id="image" {...register("image")} />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" {...register("address", { required: true })} />
            {errors.address && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="ssc">SSC Result</label>
            <input type="text" id="ssc" {...register("ssc", { required: true })} />
            {errors.ssc && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="hsc">HSC Result</label>
            <input type="text" id="hsc" {...register("hsc", { required: true })} />
            {errors.hsc && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="author">Author Name</label>
            <input type="text" id="author" {...register("author", { required: true })} />
            {errors.author && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <select id="gender" {...field}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              )}
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <select id="category" {...field}>
                  <option value="">Select Category</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Masters">Masters</option>
                </select>
              )}
            />
          </div>
          <div>
            <label htmlFor="university">University Name</label>
            <input type="text" id="university" {...register("university", { required: true })} disabled />
            {errors.university && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="Category">Scholarship Category</label>
            <input type="text" id="Category" {...register("Category", { required: true })} disabled />
            {errors.Category && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="Subject">Subject Category</label>
            <input type="text" id="Subject" {...register("Subject", { required: true })} disabled />
            {errors.Subject && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="user_email">User Email</label>
            <input type="text" id='user_email' {...register("user_email")} disabled />
          </div>
          <div>
            <label htmlFor="user_name">User Name</label>
            <input type="text" id='user_name' {...register("user_name")} disabled />
          </div>
        </div>
        <div>
          <p>This section could contain static text about the book.</p>
        </div>
        <div>
          <button className='btn btn-outline w-40 mt-4' type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddScholarShip ;
