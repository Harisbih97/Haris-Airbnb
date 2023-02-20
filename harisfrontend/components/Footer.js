import Image from "next/image";
import { FaRobot } from "react-icons/fa";

export default function Footer() {

  return (
    <div className="w-full fixed bottom-0">
        <footer className="shadow p-2">
            <div className="flex items-center justify-between">
                <ul className="flex flex-wrap items-center text-md text-black space-x-2">
                    <li className="flex">
                        <img src="/Copyright.jpg" className="h-4" />
                        <img src="/Airbnb reg logo.png" className="h-12  cursor-pointer" alt="" />
                        <img src="/React logo.png" className="h-9  cursor-pointer" />
                    </li>
                    <li className="flex text-gray-500">Haris' Airbnb project</li>
                    <li className="flex text-gray-500">-</li>
                    <li className="flex text-gray-500  cursor-pointer">Guide</li>
                    <li className="flex text-gray-500">-</li>
                    <li className="flex text-gray-500  cursor-pointer">Why Airbnb?</li>
                    <li className="flex text-gray-500">-</li>
                    <li className="flex text-gray-500 cursor-pointer">My Goal</li>
                </ul>
                <ul className="flex flex-wrap items-center text-md space-x-2">
                    <li>
                        <FaRobot className="h-4 flex cursor-pointer"/>
                    </li>
                    <li className="flex text-gray-400"></li>
                    <li className="flex text-gray-400">Chat-Bot</li>
                     
                </ul>
            </div>
        </footer>
    </div>
  )
}