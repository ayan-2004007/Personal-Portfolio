import React from "react"
import arrow from "../Assets/direction.png"

const Works = () => {
    return (
        <>
            <div>
                <div className="xl:flex xl:flex-col xl:gap-7">
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between xl:max-w-[1604px]">
                        <div className="flex items-baseline px-3 xl:px-5">
                            <div className="flex items-start">
                                <div className="overflow-x-hidden">
                                    <h1 className="max-w-[800px] font-sohne text-[86px] sm:text-[120px] md:text-[144px] lg:text-[176px] xl:text-[208px] 2xl:text-[276px] font-bold tracking-tight">Work</h1>
                                </div>
                                <p className="font-sohne text-[#121212] text-base xl:text-2xl uppercase font-bold ">(02)</p>
                            </div>
                            <img src={arrow} alt="" className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] xl:w-[100px] xl:h-[100px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="uppercase px-3 font-sohne font-semibold text-[#121212] text-[10px] leading-[15px] max-w-[374px] mx-auto md:text-[12px] md:leading-[19px] md:max-w-[450px] lg:leading-[19px] lg:max-w-[524px] lg:mr-14 xl:mr-0 xl:px-0 xl:text-sm xl:leading-[20px] xl:max-w-[595px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                            <hr className="h-[1px] bg-[#121212] xl:hidden" />
                        </div>
                    </div>
                    <hr className="hidden h-[2px] bg-[#212121] xl:flex" />
                </div>
            </div>


            <div className="h-screen w-full"></div>
        </>
    )
}

export default Works