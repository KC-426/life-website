import React, { useState, useEffect } from 'react';
import { FaUsers, FaGlobeAsia, FaShoppingBasket } from 'react-icons/fa';
import { MdDiscount } from 'react-icons/md';

const Counter = () => {
  const [healthyCustomers, setHappyCustomers] = useState(0);
  const [products, setProducts] = useState(0);
  const [brands, setBrands] = useState(0);
  const [countries, setCountries] = useState(0);

  const targetValues = {
    HealthyCustomers: 1500,
    Products: 326,
    Brands: 311,
    countries: 190,
  };

  useEffect(() => {
    const interval = setInterval(() => {
     
      setHappyCustomers(prevCount => Math.min(prevCount + 1, targetValues.HealthyCustomers));
      setProducts(prevCount => Math.min(prevCount + 1, targetValues.Products));
      setBrands(prevCount => Math.min(prevCount + 1, targetValues.Brands));
      setCountries(prevCount => Math.min(prevCount + 1, targetValues.countries));
    }, 150); 

    return () => {
      clearInterval(interval); 
    };
  }, [targetValues]);

  return (
    <div>
      <div className="main_container counter_section">
        <div className="no1 counter_main_data">
          <div className="font_data">
            <h3><FaUsers /></h3>
          </div>
          <div className='counter_main'>{healthyCustomers}+</div> <br />
          <p>Healthy Customers</p>
        </div>

        <div className="no1">
          <div className="font_data">
            <h3><FaShoppingBasket /></h3>
          </div>
          <div className='counter_main'>{products}+</div> <br />
          <p>Products</p>
        </div>

        <div className="no1">
          <div className="font_data">
            <h3><MdDiscount /></h3>
          </div>
          <div className='counter_main'>{brands}+</div> <br />
          <p>Brands</p>
        </div>

        <div className="no1 counter_last_heading">
          <div className="font_data">
            <h3><FaGlobeAsia /></h3>
          </div>
          <div className='counter_main'>{countries}+</div> <br />
          <p>Countries</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
