'use client';

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Header(props) {
    return (
        <>
            <header className="p-8 sticky top-0 bg-pewter z-50">
                <div className="max-w-[1500px] mx-auto flex justify-between items-center ">
                    <Link href={'/'} className="max-w-[120px]">
                        <Image src={'/Logo.svg'} width={'120'} height={'28'} alt="logo" />
                    </Link>


                    <ul className="nav hidden md:flex justify-end items-center text-nav uppercase">
                        <li><Link className="py-3 px-5 text-white" href={'/'}>WHO WE ARE</Link></li>
                        <li><Link className="py-3 px-5 text-white" href={'/'}>OUR DENTAL SOLUTION</Link></li>
                        <li><Link className="py-3 px-2 text-white" href={'/'}>Brand Support</Link></li>
                        <li><Link className="py-3 px-2 text-white" href={'/'}>WHY IS BRAND DIFFERENT?</Link></li>
                        <li><Link className="py-3 px-2 text-xl text-white" href={'/'}><i className="icon-globe"></i></Link></li>
                        <li><Link className="py-3 px-2 text-xl text-white" href={'/'}><i className="icon-search"></i></Link></li>
                    </ul>

                    <div className="max-sm:flex sm:hidden">
                        <Link className="py-3 px-2 text-xl text-white" href={'/'}><i className="icon-globe"></i></Link>
                        <Link className="py-3 px-2 text-xl text-white" href={'/'}><i className="icon-search"></i></Link>
                        <input type="checkbox" name="menu" id="menu" />
                        <label id="menuToggle" htmlFor="menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <div className="hidden fixed top-[115px] w-full h-full bg-slate-500 right-0">
                            <ul className="nav w-full mt-3 flex flex-col text-lg uppercase gap-3">
                                <li><Link className="align-left py-3 px-5 text-white" href={'/'}>WHO WE ARE</Link></li>
                                <li><Link className="align-left py-3 px-5 text-white" href={'/'}>OUR DENTAL SOLUTION</Link></li>
                                <li><Link className="align-left py-3 px-5 text-white" href={'/'}>Brand Support</Link></li>
                                <li><Link className="align-left py-3 px-5 text-white" href={'/'}>WHY IS BRAND DIFFERENT?</Link></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </header>

        </>
    )
}