import React ,{useEffect , useState} from "react";
import axios from "axios";
const FeaturedProducts = () => {
  const [categories , setCategories] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:6500/display/categories')
      .then((response)=>{
        setCategories(response.data.categoriesArr);
      })
      .catch((err)=>{
        console.log('err :>> ', err);
      })
  },[])

  const categoriesData = ()=>{
    return categories.map((item)=>(
      <div className="card-container"  key={item._id}>
          <div className="card" style={{ width: "18rem"  }}>
            <img src={`http://localhost:6500/uploads/categoriesCoverImg/${item.img}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> {item.name} </h5>
              <p className="card-text">
                {item.describtion}
              </p>
              <a href="/" className="btn btn-primary">
                اعرف اكتر
              </a>
            </div>
          </div>
        </div>
    ))
  }
  
  return (
    <div style={{ direction: "rtl", padding: "2%" }}>
      <h1>خدماتنا المميزة</h1>
      <div className="scroll-container">
        {categoriesData()}
      </div>
    </div>
  );
};

export default FeaturedProducts;
