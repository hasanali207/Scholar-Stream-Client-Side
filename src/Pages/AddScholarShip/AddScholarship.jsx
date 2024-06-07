import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxioxSecure';
import useScholarItems from '../../Hooks/useScholarItems';
import { useParams } from 'react-router-dom';


function AddScholarship() {
  const {user} = useAuth()
  console.log(user?.email)
    const [scholaritems, refetch] = useScholarItems()
    const { id } = useParams();
    


  const axiosSecure = useAxiosSecure()
  const { control, register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        user_email: user?.email || '', 
        user_name: user?.displayName || ''  
      },
  });



  const categories = ['Diploma', 'Bachelor', 'Masters'];
  const genders = ['Male', 'Female', 'Others'];
  

  const onSubmit = async(data) => {
   
    data.scholarId = id

    axiosSecure.post(`/scholarfromuser`, data)
   .then(() => {
    Swal.fire({
        title: "Applied Successfully",
        text: "Applied Success & record this!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Okay!"
      })
      refetch()
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  });

  };

  return (
    <div>
        <div className='py-12 flex items-center justify-center'>
        <h2 className='text-3xl font-bold'>Provide Information </h2>
        <p>{scholaritems.length}</p>
        </div>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-3 gap-3'>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" {...register("phone", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="text" id="image" {...register("image")} />
        </div>
        <div>
          <label htmlFor="Address">Adress</label>
          <input type="text" id="adress" {...register("address", { required: true })} />
          {errors.name && <span>This field is required</span>}
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
        className="p-2"
        control={control}
        defaultValue="History"
        render={({ field }) => (
          <select id="gender" {...field}>
            <option value="">Select Gender</option>
            {genders.map((gender, index) => (
              <option key={index} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        )}
      />
    </div>
    <div>
      <label htmlFor="category">Category</label>
      <Controller
        name="category"
        className="p-2"
        control={control}
        defaultValue="History"
        render={({ field }) => (
          <select id="category" {...field}>
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        )}
      />
    </div>

    <div>
          <label htmlFor="university">University Name</label>
          <input type="text" id="university" {...register("university", { required: true })} />
          {errors.author && <span>This field is required</span>}
        </div>
    <div>
          <label htmlFor="Category">Scholarship Category</label>
          <input type="text" id="Category" {...register("Category", { required: true })} />
          {errors.author && <span>This field is required</span>}
        </div>
    <div>
          <label htmlFor="Subject">Subject Category</label>
          <input type="text" id="Subject" {...register("Subject", { required: true })} />
          {errors.author && <span>This field is required</span>}
        </div>

     
        

        

        <div>
          <label htmlFor="user_email">User Email</label>
          <input type="text" id='user_email' {...register("user_email")} disabled  />

        </div>
        <div>
          <label htmlFor="user_name">User Name</label>
          <input type="text"  id='user_name' {...register("user_name")} disabled  />

        </div>
        </div>
        <div>
          
          <p>This section could contain static text about the book.</p>
        </div>
        
      <div>  <button className='btn btn-outline w-40 mt-4' type="submit">Add</button></div>
      </form>
    </div>
  );
}

export default AddScholarship;
