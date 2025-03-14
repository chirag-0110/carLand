"use client"

import React, { useState } from "react"

import { Menu } from "@headlessui/react"

import { FaCalendarAlt } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

//react date
import { DateRange } from "react-date-range"
import { format, addDays } from "date-fns"

//react date range css
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateSelection = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ])
  return (
    <Menu as={"div"} className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className={"dropdown-btn h-full w-full flex flex-col justify-center items-center xl:items-start xl:pl-8"}>
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2  xl:gap-y-8">
            <FaCalendarAlt className="text-accent" />
            <div className="text-[15px] uppercase font-bold">
              Select Date
            </div>
          </div>
          <div className="flex items-center gap-x-3 xl:ml-6">
            <div className="text-[13px] font-medium text-secondary">{format(date[0].startDate, 'dd/MM/yyyy')}</div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="text-[13px] font-medium text-secondary">
              {date[0].endDate ?
                <div>{format(date[0].endDate, 'dd/MM/yyyy')}</div>
                :
                <div>{format(date[0].startDate, 'dd/MM/yyyy')}</div>
              }
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className={"dropdowm-menu shadow-lg absolute -top-96 xl:top-[90px] left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 rounded-[10px] overflow-hidden"}>
          <DateRange
            onChange={item => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={['#ed1d24']}
            minDate={addDays(new Date(), 0)}
          />
        </Menu.Items>
      </div>
    </Menu>
  )
}

export default DateSelection