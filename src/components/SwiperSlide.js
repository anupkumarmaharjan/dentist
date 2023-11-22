import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

export const SwiperComponent = ({ data }) => {
    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="true"
            pagination="true"
        >
            {
                data.testimonials?.map((testimonials, i) => {
                    return (
                        <swiper-slide key={'_swiper_' + i}>
                            test text
                        </swiper-slide>
                    )
                })
            }
        </swiper-container>
    );
};