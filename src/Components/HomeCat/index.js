import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCat = () => {

  const [itemBg, setItemBg] = useState([
    '#ECFFEC',
    '#FEEFEA',
    '#FFF3EB',
    '#FFF3FF',
    '#F2FCE4',
    '#FEEFEA',
    '#FFFCEB',
    '#FEEFEA',
    '#ECFFEC',
    '#F2FCE3',
    '#FFFCEB',
  ]);


  return (
    <section className='homeCat'>
        <div className='container'>
          <h3 className='mb-3 hd'>Featured Categories</h3>
            <Swiper
                              slidesPerView={10}
                              spaceBetween={5}
                              navigation={true}
                              slidesPerGroup={3}
                              modules={[Navigation]}
                              className="mySwiper"
                            >
                              {
                                itemBg?.map((item,index)=>{
                                  return (
<                             SwiperSlide>
                                <div className='item text-center cursor' style={{background:item}}>
                                    <img src='https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-13.png'/>
                                    <h6>Cake & Milk</h6>
                                </div>
                              </SwiperSlide>
                                  )
                                })
                              }
                              

            </Swiper>
        </div>
      </section>
  )
}

export default HomeCat