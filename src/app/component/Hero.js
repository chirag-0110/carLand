"use client"

import { useContext } from "react"
import Search from "./Search"
import { SearchContext } from "../context/search"
import Image from "next/image"

import { motion, easeInOut } from 'framer-motion'

import { fadeIn } from "/variants"

const Hero = () => {
  const { searchActive } = useContext(SearchContext)
  return (
    <section className="h-screen xl:h-[90vh] " id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              className="h1"
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
            >
              Explore the Finest <span className="text-accent">Global</span> Offers
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find you ideal for any adventure with our diverse range of affordable and dependable car rentals.
            </motion.p>
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <button className="btn-cta">
                <Image src={'/icons/buttons/app-store.svg'} width={132} height={36} alt="Google Play" />
              </button>
              <button className="btn-cta">
                <Image src={'/icons/buttons/google-play.svg'} width={132} height={36} alt="Google Play" />
              </button>
            </motion.div>
          </div>
          <div className="relative w-full h-full max-h-[40vh] md:max-w-[70vw] xl:max-w-[868px] xl:max-h-[542px] xl:absolute xl:-right-[108px] min-[1688px]:right-[128px] xl:top-38">
            <Image src={'/images/hero/car.svg'} fill alt="" style={{ objectFit: 'contain' }} priority />
          </div>
        </div>
      </div>
      {
        searchActive ? (
          <div className="fixed top-[60px] z-10 w-full max-w-[1920px] bg-[#b2b7c2]/10" id='home'>
            <Search />
          </div>
        ) :
          (
            <div className="-mt-12 w-full max-w-[1300px] mx-auto">
              <Search />
            </div>
          )
      }
    </section>
  )
}

export default Hero