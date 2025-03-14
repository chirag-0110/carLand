"use client"

import { useContext } from "react"
import { SearchContext } from "../context/search"
import LocationSelection from "./LocationSelection"
import DateSelection from "./DateSelection"
import HoursSelection from "./HoursSelection"

const Search = () => {
  const { searchActive } = useContext(SearchContext)
  return (
    <div className={`${searchActive
      ? 'bg-white rounded-none xl:h-[80px]'
      : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'} hidden xl:block w-full relative shadow-xl border border-1 border-gray-200`}>
      <div className={`flex h-full ${searchActive && 'container mx-auto'} `} >
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0 ">
          <button className={`btn btn-sm btn-accent ${searchActive ? 'w-[164px]' : 'w-[184px]'} `}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Search