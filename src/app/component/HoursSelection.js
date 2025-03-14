"use client"

import React, { useState } from "react"

import { Menu } from "@headlessui/react"

import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { FaArrowRightLong } from "react-icons/fa6";

const hours = [
  '10:00 AM', "12:00 AM", '14:00 PM', '16:00 PM'
];

const HoursSelection = () => {
  const [hour, setHour] = useState('10:00 AM')
  return (
    <Menu as={"div"} className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className={"dropdown-btn h-full w-full flex flex-col justify-center items-center xl:items-start xl:pl-8"}>
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2  xl:gap-y-8">
            <FaClock className="text-accent" />
            <div className="text-[15px] uppercase font-bold">
              Select Hours
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-3">
            <div className="font-medium text-[13px] text-secondary xl:ml-6">
              {hour}
            </div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="font-medium text-[13px] text-secondary">
              {hour}
            </div>
          </div>

        </Menu.Button>
        <Menu.Items className={"dropdowm-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm w-full bg-white max-w-[332px] py-6 rounded-[10px]"}>
          {hours.map((hour, index) => {
            return (
              <div key={index} onClick={() => setHour(hour)} className="cursor-pointer py-4 text-center xl:pl-10 hover:bg-gray-50 text-[13px] uppercase">
                {hour}
              </div>
            )
          })}
        </Menu.Items>
      </div>
    </Menu>
  )
}

export default HoursSelection