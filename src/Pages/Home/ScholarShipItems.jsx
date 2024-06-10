import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxioxSecure";

const ScholarShipItems = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: items = [] } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/items`);
      return res.data;
    }
  });

  const [sortedItems, setSortedItems] = useState([...items]);
  
   
  useEffect(() => {
    setSortedItems([...items]);
  }, [items]);


  const sortByPrice = () => {
    const sortedItems = [...items].sort((a, b) => a.tuitionFees - b.tuitionFees);
    setSortedItems(sortedItems);
  };

  const sortByRecent = () => {
    const sortedItems = [...items].sort((a, b) => new Date(b.scholarshipPostDate) - new Date(a.scholarshipPostDate));
    setSortedItems(sortedItems);
  };





  return (
    <>
      <div className="flex justify-between mt-10">
        
        
       
 <button onClick={sortByPrice} className="btn bg-green-200 text-black">
          Low to Hight Price
        </button>
 <button onClick={sortByRecent} className="btn bg-green-200 text-black">
           Recent Post
        </button>
  
   


      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {items.length > 0 && sortedItems.slice(0,6).map(item => (
          <div key={item._id} className="card border">
            <figure className="border-b p-2">
              <img src={item.university_image} alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.university_name}</h2>
              <p>{item.scholarship_category }</p>
              <p>{item.tuitionFees }</p>
              <p>{item.scholarshipPostDate }</p>
              <div className="card-actions">
                <Link to={`/items/${item._id}`}>
                  <button className="btn btn-outline my-4 ml-3">
                    View Details
                  </button>
                </Link>
              </div>  
            </div>
          </div>
        ))}
      </div> 


      
    </>
  );
}

export default ScholarShipItems;
