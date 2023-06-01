// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

// import required modules
import { EffectFade, Autoplay } from 'swiper'

// images
import Img1 from '../assets/images/heroSlider/1.jpg'
import Img2 from '../assets/images/heroSlider/2.jpg'
import Img3 from '../assets/images/heroSlider/3.jpg'

const slides = [
    {
        title: 'Your Luxury Hotel For Vacation',
        bg: Img1,
        text: 'Room & Suites'
    },
    {
        title: 'Your Luxury Hotel For Vacation',
        bg: Img2,
        text: 'Room & Suites'
    },
    {
        title: 'Your Luxury Hotel For Vacation',
        bg: Img3,
        text: 'Room & Suites'
    },
]

function HeroSlider() {
    return (
        <Swiper modules={[EffectFade, Autoplay]}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className='heroSlider h-[600px] lg:h-[860px]'
        >
            {slides.map((slide, index) => (

                <SwiperSlide key={index} className='h-full bg-pink-200 relative flex justify-center items-center'>
                    <div className='z-20 absolute text-white text-center flex flex-col justify-center items-center w-full h-full'>
                        <div className='uppercase tracking-[6px] mb-5'>Just Enjoy and Relax</div>
                        <h1 className='text-[32px] uppercase tracking-[2px] max-w-[920px] lg:text-[56px] leading-tight mb-6'>{slide.title}</h1>
                        <div><button className='btn btn-lg btn-primary mx-auto'>{slide.text}</button></div>
                    </div>
                    <div className='absolute top-0 w-full h-full'>
                        <img className='object-cover h-full w-full' src={slide.bg} />
                    </div>

                    <div className='absolute w-full h-full top-0 bg-black/70'></div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default HeroSlider;