import LayoutOne from "../components/Layout/LayoutOne";
import SliderTwo from "../components/Sections/Slider/SliderTwo";
import { SlideThree } from "../components/Sections/Slider/SlideThree";
import sliderData from "../data/slider/sliderOne.json";
import IntroductionOne from "../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../data/introduction/introductionOne.json";
import IntroductionTwo from "../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../data/introduction/introductionTwo.json";
import ProductSlideOne from "../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";
import productSlideOneData from "../data/products.json";
import TestimonialOne from "../components/Sections/Testimonial/TestimonialOne";
import testimonialOneData from "../data/testimonial/data.json";
import TeamOne from "../components/Sections/Team/TeamOne";
import teamOneData from "../data/team/teamOne.json";
import CTAOne from "../components/Sections/CallToAction/CTAOne";
import CTATwo from "../components/Sections/CallToAction/CTATwo";
import { useImperativeHandle, useState } from "react";
import { baseUrl } from "../../config";
import axios from "axios";
import ShopProducts from "../components/Shop/ShopProducts";
import ProductSlider from "../components/Sections/ProductThumb/Elements/ProductSlider";
import { PrevArrow, NextArrow } from "../components/Other/SliderArrow";
import SectionTitleOne from "../components/Sections/SectionTitle/SectionTitleOne";
import Slider from "react-slick";
import Counter from "./homepages/homepage7";
import BrandSlideOne from "../components/Sections/BrandSlide/BrandSlideOne";
import ShippingData from "./homepages/homepage8";
import Services from "./homepages/homepage9";
import Rate from "../components/Other/Rate";
import Benefits from "../components/Other/Benefits";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import Button from "../components/Control/Button";
import Faq from "../components/Faq/Faq";
import { MdSettingsBluetooth } from "react-icons/md";

export default function homepage1() {
  // const [viewProducts, setViewProducts] = useState(false)
  // const handleClick = () => {
  //   setViewProducts(!viewProducts);
  //   console.log('clicked !!')
  // }

  console.log(sliderData);

  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [banner, setBannner] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [brands, setBrands] = useState([]);
  const [blogs, setBlogs] = useState([])

  const fetchData = async () => {
    try {
      const url = `${baseUrl}/api/get/all/banners`;
      const res = await axios.get(url, { withCredentials: true });
      setData(res.data);

      const url_pro = `${baseUrl}/api/all/products`;
      const res_pro = await axios.get(url_pro, { withCredentials: true });
      setProduct(res_pro.data.allProducts);

      const url_prime = `${baseUrl}/api/get/all/category`;
      console.log(url_prime);
      const res_prime = await axios.get(url_prime, { withCredentials: true });
      console.log(res_prime);
      setCategory(res_prime.data.all_categories);

      const url_banner = `${baseUrl}/api/get/all/category`;
      const res_banner = await axios.get(url_banner, { withCredentials: true });

      const url_brands = `${baseUrl}/api/get/brand`;
      const res_brand = await axios.get(url_brands, { withCredentials: true });
      setBrands(res_brand.data.findBrands);

      const url_mobile = `${baseUrl}/api/mobile/get/all/banners`;
      const res_mobile = await axios.get(url_mobile, { withCredentials: true });
      console.log(res_mobile);
      setMobile(res_mobile.data);

      const url_blogs = `${baseUrl}/api/admin/get/list/of/all/blogs`;
      const res_blogs = await axios.get(url_blogs, {withCredentials: true})
      setBlogs(res_blogs.data)

    } catch (err) {
      console.log(err);
    }
  };

  useState(() => {
    fetchData();
  }, []);

  console.log(data);
  console.log(category);
  console.log("main start", brands);

  const setting = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "product-slide__wrapper",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1170,
        setting: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        setting: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        setting: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const responsiveReview = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const reviewObj = [
    {
      _id: "1",
      title: "India",
      name: "Mr. Ram Chand",
      url: "https://www.youtube.com/embed/4LzEZYvyJVg",
    },
    {
      _id: "2",
      title: "Australia",
      name: "Mr. Jone",
      url: "https://www.youtube.com/embed/naNyQAn08qo",
    },
    {
      _id: "3",
      title: "London",
      name: "Mis. Scarlett Johansson",
      url: "https://www.youtube.com/embed/62UeowWFW6A",
    },
    {
      _id: "4",
      title: "Dubai",
      name: "Mis. Charlize Theron",
      url: "https://www.youtube.com/embed/5W-QigyVOvI",
    },
    {
      _id: "5",
      title: "North America",
      name: "Mis. Emma Stone",
      url: "https://www.youtube.com/embed/lBzVYI_gTQI",
    },
  ];

  return (
    <LayoutOne title="Life Antidote" data={sliderData} className="-style-1">
      <SliderTwo data={data} className="-style-1" showDots />
      <SlideThree data={mobile} />

      <SectionTitleOne
        align="center"
        spaceBottom="50px"
        className="sectionTitleOne_data"
      >
       Signature Product, Precise Healing
      </SectionTitleOne>

      <div className="container">
        <ShopProducts
          gridColClass="col-6 col-sm-6 col-md-4 col-lg-3"
          listColClass="col-6 col-lg-6"
          view={"grid"}
          data={product.slice(0, 12)}
        />
      </div>

      <div className="view_products_page">
        <div
          style={{
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <Link href="/products" className="btn">
            View Products
          </Link>
        </div>
      </div>

      {/* <IntroductionTwo data={introductionTwoData} />  */}
      <div>
        {/* <ShippingData /> */}
        {/* <Benefits /> */}
      </div>
      <div>
        <SectionTitleOne align="center" spaceBottom="20px">
        Pharmaceuticals Services Expertise
        </SectionTitleOne>
        <Services />
      </div>

      <ProductSlideOne data={category} />

      <IntroductionOne data={introductionOneData} />

      <div className="brand-slide brands_homepage_slider">
        <div className="container">
          <SectionTitleOne align="center" spaceBottom="50px">
          Top Brands, Endless Possibilities
          </SectionTitleOne>

          <div className="brand-slider" style={{ zIndex: 6 }}>
            <Carousel responsive={responsive}>
              {brands?.map((data, index) => (
                <div key={data._id}>
                  <div className="brand_card_">
                    <img
                      src={data?.main_category_image?.image_url}
                      width="210"
                      // height="200"
                    ></img>
                  </div>

                  <div className="title">{data?.main_category_name} </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="view_brands_page">
            <Link href="/brands" className="btn">
              View All Brands
            </Link>
          </div>
        </div>
      </div>

      <div className="product-slide video_review_homepage_slider">
        <div>
          <Counter />
        </div>
        <div className="container">
          <SectionTitleOne align="center" spaceBottom="50px">
          Words of Appreciation
          </SectionTitleOne>

          <div className="product-slider video_reviews_slider">
            <Carousel responsive={responsiveReview}>
              {reviewObj.map((data, index) => (
                <div className="video_review_box" key={data._id}>
                  <div className="review_card">
                    <iframe
                      title={data.title}
                      width="320"
                      height="260"
                      src={data.url}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="name">{data.name}</div>
                  <div className="title country">{data.title}</div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <TestimonialOne data={testimonialOneData} />
      {/* <TeamOne data={teamOneData} /> */}
      {/* <CTAOne /> */}


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

<div className="view_brands_page blogs_data">
            <Link href="/blogs" className="btn">
              View All Blogs
            </Link>
          </div>



      <Faq />
    </LayoutOne>
  );
}
