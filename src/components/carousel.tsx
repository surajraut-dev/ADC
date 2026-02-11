'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay  } from 'swiper/modules';

export default function Carousel() {
  return (
 <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      speed={2000} // 2 seconds fade duration
      autoplay={{
        delay: 2000, // 3 seconds between slides
        disableOnInteraction: false,
      }}
      loop={true}
      style={{ width: '100vw', height: '100vh',marginTop:'5%' }}
      // custom easing for smoother slow-down
      onInit={(swiper) => {
        swiper.el.style.setProperty('--swiper-transition-timing-function', 'ease-out');
      }}
    >

      <SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image src="/carousel1.png" alt="1" fill style={{ objectFit: 'cover' }} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image src="/carousel2.png" alt="2" fill style={{ objectFit: 'cover' }} />
        </div>
      </SwiperSlide>

      {/* <SwiperSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image src="/Carousel3.jpeg" alt="3" fill style={{ objectFit: 'cover' }} />
        </div>
      </SwiperSlide> */}
    </Swiper>

  );
}