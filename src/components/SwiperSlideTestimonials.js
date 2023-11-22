import { useRef, useEffect, useCallback, useState } from 'react';
import { register } from 'swiper/element/bundle';
register();
import Image from "next/image";

export const SwiperTestimonials = ({ data }) => {
    const swiperElRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!swiperElRef.current) return;
        swiperElRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperElRef.current) return;
        swiperElRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
            >
                {
                    data.testimonials?.map((testimonials, i) => {
                        return (
                            <swiper-slide key={'_testimonials_' + i}>
                                <div className={'max-w-[1090px] mx-auto'}>
                                    {/* <TestimonialsCard data={testimonials} /> */}
                                    <div className="card flex justify-between top-0 bg-transparent shadow-none ">
                                        {
                                            testimonials.image &&
                                            <Image src={testimonials.image} className="image-placeholder" width={'410'} height={'266'} alt={testimonials.title} />
                                        }
                                        <div className="content p-5">
                                            <div className="italic text-lg md:text-[21px] leading-[2] md:leading-[2.28]" dangerouslySetInnerHTML={{ __html: testimonials.text }}></div>

                                            <div className="description text-lg leading-[1.83] mt-8 flex justify-center items-center gap-[26px]">
                                                <div className={"prev-arrow w-6 h-6 flex justify-center items-center " + (i === 0 ? 'opacity-30 pointer-events-none' : 'cursor-pointer')}onClick={handlePrev}>
                                                    <i className='icon-chevron-left'></i>
                                                </div>
                                                <div>
                                                    <strong>{testimonials.textby.name}</strong>, {testimonials.textby.study}<br />
                                                    {testimonials.textby.post}
                                                </div>
                                                <div className={"next-arrow w-6 h-6 flex justify-center items-center " + (i === (data.testimonials.length - 1) ? 'opacity-30 pointer-events-none' : 'cursor-pointer')} onClick={handleNext}>
                                                    <i className='icon-chevron-right'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        )
                    })
                }
            </swiper-container>
        </>
    );
};