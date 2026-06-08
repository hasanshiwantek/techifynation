import React from 'react'
import Image from "next/image";
import img1 from '@/assets/img2.jpg'

const HighPowerSupply = () => {
  return (
    <div className='mb-8 mt-8' >

    
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:flex-1">
        <h5 className="text-[12px] font-semibold uppercase text-[#121212BF]">
          Boost YOUR DESKTOP SPEED
        </h5>

        <h2 className="text-[40px] mt-2 whitespace-nowrap">
          With the Right Supply
        </h2>

        <p className="mt-4 text-[#121212BF] text-[16px]">
    Did you know that the right power supply can significantly improve your computer’s overall performance? A high-quality PSU ensures stable power delivery, reduces system crashes, and helps your hardware run efficiently under heavy workloads. Choosing the correct power supply not only protects your components but also enhances speed, reliability, and long-term system health for a smoother computing experience.

        </p>
      </div>

       <div className="w-full md:w-[50%]">
  <Image
    src={img1}
    alt="Power Supply"
    width={1500}
    height={1000}
    className="w-full h-auto object-cover"
  />
</div>
    </div>
    </div>
  )
}

export default HighPowerSupply