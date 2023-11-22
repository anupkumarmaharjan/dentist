import Image from "next/image";
import Link from "next/link";
// import HeroImage from '../public/'
export default function ContentBlock({ data }) {
    return (
        <section className='content-block image-content-block flex flex-col md:flex-row bg-white py-12 md:pt-[200px] md:pb-[212px]'>
            <div className="md:w-1/2 md:order-1 max-md:px-8 max-md:pb-8">
                <Image alt={data[0].title} src={'/images/' + data[0].image} width={'1084'} height={'652'} />
            </div>
            <div className='md:w-1/2 flex justify-end md:order-0 max-md:px-8'>
                <div className="md:max-w-[576px]">
                    <h2 className='text-h2 max-md:text-2xl'>{data[0].title}</h2>
                    <div className='text-primary mt-8 md:mt-[72px] text-lg leading-[1.83]'>
                        {data[0].description}
                    </div>
                    <Link className='btn btn-primary mt-8 md:mt-14' href={data[0].link.url}>{data[0].link.name}</Link>
                </div>
            </div>
        </section>
    )
}