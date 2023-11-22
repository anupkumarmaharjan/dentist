"use client"; // This is a client component
import { SwiperTestimonials } from "./SwiperSlideTestimonials";
// import HeroImage from '../public/'
export default function Testimonials({ data }) {
    // console.log('data', data)
    return (
        <section className='content-block testimonials px-5 bg-pale-blue py-12 md:pt-[140px] md:pb-[182px] text-primary text-center'>
            <div className='max-w-7xl mx-auto'>
                <h3>{data.title}</h3>
                <div className="mt-10 mb-8 md:mt-[72px] md:mb-[80px]">
                    <i className="icon-quote opacity-30 text-4xl"></i>
                </div>
                
                <SwiperTestimonials data={data} />
            </div>
        </section>
    )
}