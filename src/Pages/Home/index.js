import React from 'react'
import Button from '@mui/material/Button';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import HomeBanner from '../../Components/HomeBanner'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import ProductItem from '../../Components/ProductItem';
import banner1 from '../../assets/images/banner1.png'
import HomeCat from '../../Components/HomeCat';

const Home = () => {

  var productSliderOptions = {
    items: 4,
    nav: true,
    rewind: true,
    autoplay: true
  };

  return (
    <>
      <HomeBanner/> 

      <HomeCat/>

      <section className='homeProducts'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='banner'>
                <img src={banner1} className='cursor w-100'/>
              </div>

              <div className='banner mt-4'>
                <img src='https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg' className='cursor w-100'/>
              </div>
            </div>
            <div className='col-md-9 productRow'>
              <div className='d-flex align-items-center'>
                <div className='info w-75'>
                  <h3 className='mb-0 hd'>BEST SELLERS</h3>
                  <p className='text-custom text-sml mb-0'>Do not miss the current offers until the end of March.</p>
                </div>

                <Button className='viewAllBtn ml-auto'>View All <IoIosArrowRoundForward /> </Button>
              </div>

              <div className='product_row w-100 mt-4'>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  
                  <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>
                  
                   <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                   <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                   <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                   <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>

                   <SwiperSlide>
                   <ProductItem/>
                  </SwiperSlide>
            
                </Swiper>
              </div>

              <div className='d-flex align-items-center mt-5'>
                <div className='info w-75'>
                  <h3 className='mb-0 hd'>NEW PRODUCTS</h3>
                  <p className='text-custom text-sml mb-0'>Dont miss this opportunity at a special discount just for this week.</p>
                </div>

                <Button className='viewAllBtn ml-auto'>View All <IoIosArrowRoundForward /> </Button>
              </div>

              <div className='product_row productRow2 w-100 mt-4 d-flex'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home