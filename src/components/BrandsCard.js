import Image from "next/image";
import Link from "next/link";

export default function BrandsCard({ data }) {
    return (
        <div className="card flex flex-col md:flex-row items-center top-0 bg-white shadow-none">
            {
                data.largeimage &&
                <div className="md:w-1/2 md:order-1 px-12 py-12 md:pt-[200px] md:pb-[212px] bg-pale-violet flex flex-col justify-center items-center ">
                    <Image src={'/images/' + data.largeimage} className="image-placeholder" width={'533'} height={'748'} alt={data.title} />
                </div>
            }
            <div className="md:w-1/2 content flex flex-col justify-center items-center p-5 max-xl:pr-14 md:order-0">
                <div className="max-w-[354px]">
                    {
                        data.image &&
                        <Image src={'/images/' + data.image} className="image-placeholder mb-5 md:mb-14" width={'306'} height={'38'} alt={data.title} />
                    }
                    <div className="text-[15px] leading-[2]" dangerouslySetInnerHTML={{ __html: data.text }}></div>
                    {
                        data.link?.url &&
                        <Link className='btn btn-primary mt-9' href={data.link.url}>{data.link.name}</Link>
                    }
                </div>
            </div>
        </div>
    )
}