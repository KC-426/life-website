import React, { useState, useEffect, userRouter } from "react";
import { baseUrl } from "../../../config";
import axios from "axios";
import ShopProducts from "../../components/Shop/ShopProducts";
import LayoutOne from "../../components/Layout/LayoutOne";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import LayoutFour from "../../components/Layout/LayoutOne";

function Brand({ data, type, className }) {
  const [brands, setBrands] = useState([]);

  // console.log(data, baseUrl);

  // const fetchData = async () => {
  //   try {
  //     const url_pro = `${baseUrl}/api/get/brand`;
  //     const res_pro = await axios.get(url_pro, { withCredentials: true });
  //     setBrand(res_pro.data.allProducts);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useState(() => {
  //   fetchData();
  // }, []);



  
  // const router = useRouter();
  // const { slug } = router.query;

  const fetchData = async () => {
    try {
      const url_brands = `${baseUrl}/api/get/brand`;
      const res_brand = await axios.get(url_brands, { withCredentials: true });
      setBrands(res_brand.data.findBrands);
    } catch (err) {
      console.log(err);
    }
  };

  useState(() => {
    fetchData();
  }, []);
  


  return (
    <LayoutFour title={"Shop"}>
      <Breadcrumb title="Our Brands">
          <BreadcrumbItem name="Home" />
          <BreadcrumbItem name="Our Brands" current />
      </Breadcrumb>
      
          
      <div className="product-card-container container">
        <div className="row">
          {brands?.map((data, index) => (
            <div key={data._id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="brand-cards">
                <img
                  src={data?.main_category_image?.image_url}
                  alt={data?.main_category_name}
                />
                <div className="title">{data?.main_category_name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutFour>
  );


}

export default Brand;

