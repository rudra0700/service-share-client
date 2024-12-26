// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/lottifiles/bgCarousal1.jpg'
import bgimg2 from '../assets/lottifiles/bgCarousal2.jpg'
import bgimg3 from '../assets/lottifiles/bgCarousal3.png'


export default function Carousal() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Reliable Home Services for Every Need, Anytime, Anywhere!'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Connecting You to Trusted Home Experts—Quick and Hassle-Free!'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Your One-Stop Solution for Quality Home Services Today'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}