import Image from "next/image";
import Link from "next/link";
// import HeroImage from '../public/'
export default function Hero({ data }) {
    return (
        <section className='content-block hero px-8 xl:px-28 bg-pale-yellow'>
            <div className='xl:max-w-[1520px] mx-auto flex flex-col md:flex-row items-center text-primary'>
                <div className="md:w-1/2 md:translate-x-[-42px] h-full md:order-1">
                    <Image className="object-cover h-full" alt={data[0].title} src={'/images/' + data[0].image} width={'856'} height={'928'} />
                </div>

                <div className='md:w-1/2 max-xl:py-16 2xl:pt-[100px] 2xl:pb-[220px] md:order-0'>
                    <h1 className='xl:text-h1 text-4xl' dangerouslySetInnerHTML={{ __html: data[0].title }}></h1>
                    <div className='text-lg sm:pr-20'>
                        {data[0].description}
                    </div>
                    <Link className='btn btn-primary mt-9' href={data[0].link.url}>{data[0].link.name}</Link>
                </div>
            </div>
        </section>
    )
}