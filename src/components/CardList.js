'use client';
import { useState } from 'react'
import Link from 'next/link'
import Card from './Card';

export default function CardList({ data, count }) {
  return (
    <section className='content-block card-list bg-pale-white py-14 md:pt-[160px] md:pb-[170px]'>
      <div className={`max-w-6xl mx-auto px-8`}>
        <div className='flex max-md:flex-col justify-between items-center'>
          <h3 className='font-normal max-md:text-2xl max-md:mb-4'>{data.title}</h3>
          <Link href={data.viewall.link}>{data.viewall.text} <i className='icon-arrow-right text-sm'></i></Link>
        </div>
        <div className={`flex sm:grid sm:grid-cols-3 flex-wrap max-md:mx-[-10px] sm:gap-8 mt-8 md:mt-[47px]`}>
          {
            data.newsdata?.slice(0, count).map((data, i) => {
              return (
                <div className={'max-sm:px-[10px]'} key={i}>
                  <Card data={data} />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
