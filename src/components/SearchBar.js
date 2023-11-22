'use client';
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function SearchBar({ visibility, inline }) {
    const [searchText, setSearchText] = useState('');
    const setText = (e) => {
        setSearchText(e.target.value);
    }
    return (
        <div className={(visibility ? 'flex' : 'hidden') + ( inline ? '' : ' z-10' ) + " search-bar bg-b10 py-5 sticky top-[110px]"}>
            <div className="flex flex-col w-full max-w-7xl mx-auto gap-5 px-12">
                <div className="search-bar__input flex items-center w-full gap-5 ">
                    <label className="h3 pl-4 w-[120px]" htmlFor="search">Sök</label>
                    <input className="flex-1 h-[60px] px-3" placeholder="Ange sökord" type="text" id="search" onChange={setText} />
                    {
                        inline ?
                            <button
                                type="button"
                                className="px-5 bg-b70 h-full w-20 text-white hover:bg-slate-600"
                                onClick={() => { }}
                            >
                                <i className="icon-search text-2xl"></i
                                ></button>
                            :
                            <Link
                                className="px-5 bg-b70 h-full w-20 inline-flex items-center justify-center text-white hover:bg-slate-600"
                                href={{
                                pathname: '/search',
                                query: searchText,
                            }}
                            ><i className="icon-search text-2xl"></i></Link>
                    }
                </div>
                {
                    !inline &&
                    <div className="search-bar__filter flex items-center w-full gap-5 ">
                        <label className="h5 w-[120px]">Områden</label>
                        <div className="filters gap-2 flex">
                            <button className="active text-xs py-2 px-3 min-w-[73px] bg-b15">Alla</button>
                            <button className="text-xs py-2 px-3 min-w-[73px] bg-b5">Energi</button>
                            <button className="text-xs py-2 px-3 min-w-[73px] bg-b5">Hållbarhet</button>
                            <button className="text-xs py-2 px-3 min-w-[73px] bg-b5">Hälsa</button>
                            <button className="text-xs py-2 px-3 min-w-[73px] bg-b5">Jobb</button>
                            <button className="text-xs py-2 px-3 min-w-[73px] bg-b5">Utbildning</button>
                            <Menu as="div" className="relative inline-flex text-left">
                                <div>
                                    <Menu.Button className="flex items-center text-xs py-2 px-3 min-w-[73px] bg-b5">
                                        Alla områden
                                        <ChevronDownIcon
                                            className="ml-1 -mr-1 h-5 w-5 text-b15"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        Edit
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        Duplicate
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        Archive
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        Move
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        Delete
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                        </div>
                    </div>
                }
            </div>

        </div>
    )
}