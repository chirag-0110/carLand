"use client"

import React, { useState } from "react"

import { Menu } from "@headlessui/react"

import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa'

const location = [
  "sector 49, Gurgaon",
  "Shubhas chowk, Gurgaon",
  "sector 15, Gurgaon",
  "sector 63, Noida",
]


const LocationSelection = () => {
  const [selectedLocation, setSelectedLocation] = useState('Select Location')
  return (
    <Menu as={"div"} className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className={"dropdown-btn h-full w-full flex flex-col justify-center items-center xl:items-start xl:pl-8"}>
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2  xl:gap-y-8">
                <FaMapMarkerAlt className="text-accent" />
                <div className="text-[15px] uppercase font-bold">
                  Select Location
                </div>
              </div>
              <div className="uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left">{selectedLocation}</div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className={"dropdowm-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]"}>
          {location.map((location, index) => {
            return <div onClick={() => setSelectedLocation(location)} key={index} className="cursor-pointer py-4 xl:pl-10 hover:bg-gray-50 text-[13px] uppercase">
              {location}
            </div>

          })}
        </Menu.Items>
      </div>
    </Menu>
  )
}

export default LocationSelection