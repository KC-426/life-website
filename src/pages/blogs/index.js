import React, { useState, useEffect, userRouter } from "react";
import { baseUrl } from "../../../config";
import axios from "axios";
import ShopProducts from "../../components/Shop/ShopProducts";
import LayoutOne from "../../components/Layout/LayoutOne";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import LayoutFour from "../../components/Layout/LayoutOne";

function Blog({ data, type, className }) {
  const [blogs, setBlogs] = useState([]);

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
      const url_blogs = `${baseUrl}/api/admin/get/list/of/all/blogs`;
      const res_blogs = await axios.get(url_blogs, { withCredentials: true });
      setBlogs(res_blogs.data);
    } catch (err) {
      console.log(err);
    }
  };

  useState(() => {
    fetchData();
  }, []);
  


  return (
    <LayoutFour title={"Shop"}>
      <Breadcrumb title="Our Blogs">
          <BreadcrumbItem name="Home" />
          <BreadcrumbItem name="Our Blogs" current />
      </Breadcrumb>
      
          
   
      <div className="blog-card-container">
  {blogs?.map(data => (
    <div className="blog-card">
      <img
        src={data.blog_image.image_url}
        width="200"
        height="400"
        alt={data.blog_title}
      />
      <div className="title">{data.blog_title}</div>
      <div className="description">{data.about_blog}</div>
    </div>
  ))}
</div>
    </LayoutFour>
  );


}

export default Blog;

