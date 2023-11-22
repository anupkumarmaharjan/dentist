import Image from "next/image";
import Link from "next/link";

export default function Card({ data }) {

    return (
        <div className="card flex justify-between top-0 bg-white shadow-none">
            <Link href={'/'} className="max-w-full">
                <div className="content py-11 px-10 border-[1px] border-b-0 border-b10">
                    {
                        data.tag?.length || data.category?.length ?
                            <div className="flex gap-2 my-2 flex-wrap uppercase tracking-[2.4px] text-sm mb-[40px]">
                                {/* {
                                    data.category?.map((category, index) => {
                                        return <span key={index} className="tag font-semibold">{category}</span>;
                                    })
                                }

                                {
                                    data.tag?.map((tag, index) => {
                                        return <span key={index} className="tag">{tag}</span>;
                                    })
                                } */}
                                <span>news - </span>
                                {data.published_date}
                            </div>
                            : null
                    }
                    <h4 className="text-lg font-medium">{data.title}</h4>
                    <div className="description text-info mt-[28px] mb-1">{data.description}</div>
                </div>

                {
                    data.image &&
                    <Image src={'/images/'+data.image} className="image-placeholder" width={'410'} height={'266'} alt={data.title} />
                }
            </Link>
        </div>
    )
}