import { useRef, useEffect, useCallback, useState } from 'react';
import BrandsCard from './BrandsCard';
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide, SwiperPagination } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const SwiperBrands = ({ data }) => {
    const swiperElRef = useRef(null);
    const [winWidth, setWinWidth] = useState(0);

    const handlePrev = useCallback(() => {
        if (!swiperElRef.current) return;
        swiperElRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperElRef.current) return;
        swiperElRef.current.swiper.slideNext();
    }, []);

    useEffect(() => {
        setWinWidth(window.innerWidth)
    }, []);

    return (
        <>
            <Swiper
                ref={swiperElRef}
                slidesPerView={1}
                navigation={true}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return '<span class="' + className + '">' + (index < 10 ? '0' : '') + (index + 1) + '</span>';
                    }
                }}
                direction={winWidth < 1023 ? 'horizontal' : 'vertical'}
                className={(winWidth < 1023 ? 'brand-slider__sm' : 'max-h-[1080px] brand-slider') + ' custom-brand__slider'}
            >
                {
                    data.brands?.map((brandsdata, i) => {
                        return (
                            <SwiperSlide key={'_brands_' + i}>
                                {/* <BrandsCard data={brandsdata} /> */}
                                <div className="card flex flex-col md:flex-row items-center top-0 bg-white shadow-none">
                                    {
                                        brandsdata.largeimage &&
                                        <div className="md:w-1/2 md:order-1 px-12 py-12 md:pt-[200px] md:pb-[212px] bg-pale-violet flex flex-col justify-center items-center ">
                                            <Image src={'/images/' + brandsdata.largeimage} className="image-placeholder" width={'533'} height={'748'} alt={brandsdata.title} />
                                        </div>
                                    }
                                    <div className="md:w-1/2 content flex flex-col justify-center items-center p-5 max-sm:pt-8 max-xl:pr-14 md:order-0">
                                        <div className="max-w-[354px]">
                                            {
                                                brandsdata.image &&
                                                <Image src={'/images/' + brandsdata.image} className="image-placeholder mb-8 md:mb-14" width={'306'} height={'38'} alt={brandsdata.title} />
                                            }
                                            <div className="text-[15px] leading-[2]" dangerouslySetInnerHTML={{ __html: brandsdata.text }}></div>
                                            {
                                                brandsdata.link?.url &&
                                                <Link className='btn btn-primary mt-9' href={brandsdata.link.url}>{brandsdata.link.name}</Link>
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* <div className={"prev-arrow w-6 h-6 flex justify-center items-center " + (i === 0 ? 'opacity-30 pointer-events-none' : 'cursor-pointer')} onClick={handlePrev}>
                                    <i className='icon-chevron-left'></i>
                                </div>
                                <div className={"next-arrow w-6 h-6 flex justify-center items-center " + (i === (data.brands.length - 1) ? 'opacity-30 pointer-events-none' : 'cursor-pointer')} onClick={handleNext}>
                                    <i className='icon-chevron-right'></i>
                                </div> */}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
};