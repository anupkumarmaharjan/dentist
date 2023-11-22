import Image from "next/image";
import Link from "next/link";

export default function TestimonialsCard({ data }) {
    return (
        <div className="card flex justify-between top-0 bg-transparent shadow-none ">
            {
                data.image &&
                <Image src={data.image} className="image-placeholder" width={'410'} height={'266'} alt={data.title} />
            }
            <div className="content p-5">
                <div className="italic text-[21px] leading-[2.28]" dangerouslySetInnerHTML={{__html: data.text}}></div>
                
                <div className="description text-lg leading-[1.83] mt-8">
                    <strong>{data.textby.name}</strong>, {data.textby.study}<br />
                    {data.textby.post}
                </div>
            </div>
        </div>
    )
}