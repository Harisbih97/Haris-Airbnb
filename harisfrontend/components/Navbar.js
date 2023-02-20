import Image from "next/image";
import { FaSearch, FaGlobeAmericas } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { GoPerson } from "react-icons/Go";
import {Modal} from "@mantine/core";
import {useState} from "react";

export default function Navbar() {

    const [opened, setOpened] = useState(false);

  return (
    <div className="border-b-2 border-gray-200 pb-2 grid grid-cols-6">

        <div className="relative items-center col-span-2 h-10 my-auto cursor-pointer">
            <Image
            src="/Airbnb long logo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            />
        </div>

        <div className="flex items-center border-2 shadow-md rounded-full py-2 col-span-2 mt-2 sticky top-0">
            <input
            type="text"
            placeholder="search"
            className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
            />
            <FaSearch className="cursor-pointer inline-flex mx-2 text-red-400 h-8 rounded-full" />
        </div>

        <div className="flex items-center space-x-4 justify-end mt-2">
            <Modal
            opened={opened}
            onClose={()=> setOpened(false)}
            title="Haris' Languages"    
            >    
                <div>
                    <button>English (Fluent)</button>                  
                    <button>Bosnian (Fluent)</button>
                    <button>Bulgarian (Good)</button>
                    <button>German (Novice)</button>
                </div>

            </Modal>
            <button onClick={() => setOpened(true)} className="">
                <FaGlobeAmericas className="h-6"/>
            </button>
        </div>
        <div className="mt-2 flex ml-10 p-2 border-2 mr-1 rounded-full border-gray-400">
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full text-black cursor-pointer" >
            <CgMenuGridO/>
            </div>
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full text-red-400 cursor-pointer">
            <GoPerson/>
            </div>
        </div>        
    </div>
  )
}