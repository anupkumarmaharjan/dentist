"use client"; // This is a client component
import { SwiperBrands } from "./SwiperSlideBrands";
// import HeroImage from '../public/'
export default function BrandCarousel({ data }) {
    return (
        <section className='content-block brand-carousel bg-pale-white relative'>
            {
                data.title &&
                <h3>{data.title}</h3>
            }
            <SwiperBrands data={data} />
        </section>
    )
}