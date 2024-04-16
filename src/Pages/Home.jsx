import React from 'react'
import image1 from '../assets/starbucks.png'
import icon from '../assets/icon.png'
import image2 from '../assets/dashboard.png'
import settings from '../assets/settings.png'

function Home() {
  return (
    <div className='w-screen bg-[#0F172A] text-xs p-[2rem] flex flex-col gap-[2rem] items-center md:gap-[3rem]'>
     <div className='text-white flex text-center text-sm md:text-2xl md:w-full md:justify-center'>The world's most innovative companies use our app</div>
     <div className='flex flex-col gap-[2rem] md:min-w-full justify-around md:flex-row md:gap-4'>
        <div className='flex gap-4'>
            <div className='w-[2rem] h-[1.5rem] md:w-[3.5rem] md:h-[2.5rem]'>
                <img src={image1} alt="logo" className='w-full h-full'/>
            </div>
            <div className='text-white text-xs md:text-base flex justify-center items-center'>
                 Transistor
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='w-[2rem] h-[1.5rem] md:w-[3.5rem] md:h-[2.5rem]'>
                <img src={image1} alt="logo" className='w-full h-full'/>
            </div>
            <div className='text-white text-xs flex justify-center items-center  md:text-base' >
                 Reform
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='w-[2rem] h-[1.5rem] md:w-[3.5rem] md:h-[2.5rem]'>
                <img src={image1} alt="logo" className='w-full h-full'/>
            </div>
            <div className='text-white text-xs uppercase flex justify-center items-center md:text-base'>
                 Tuple
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='w-[2rem] h-[1.5rem] md:w-[3.5rem] md:h-[2.5rem]'>
                <img src={image1} alt="logo" className='w-full h-full'/>
            </div>
            <div className='text-white text-xs flex justify-center items-center md:text-base'>
                 SavvyCal
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='w-[2rem] h-[1.5rem] md:w-[3.5rem] md:h-[2.5rem]'>
                <img src={image1} alt="logo" className='w-full h-full'/>
            </div>
            <div className='text-white text-xs flex justify-center items-center  md:text-base'>
                 Statamic
            </div>
        </div>
     </div>
      <div className='flex flex-col gap-[1.5rem] mt-[4rem] mb-[4rem] items-center md:mt-[2rem]'>
        <div className='text-base text-indigo-400 md:text-xl'>
           Deploy Master
        </div>
        <div className='text-white text-lg font-bold text-center md:text-xl md:font-extrabold'>
           Everything you need to deploy your app
        </div>
        <div className='text-gray-400 text-center text-xs md:text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className='flex flex-col gap-[3rem] md:flex-row'>
        <div className='flex flex-col gap-[1.5rem]'>
            <div className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[2.5rem] rounded-lg overflow-hidden'>
               <img src={icon} alt="icon" className='w-full h-full'/>
            </div>
            <div className='text-white text-sm font-extrabold md:text-lg'>
                Server Monitoring
            </div>
            <div className='text-gray-400 text-xs md:text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className='text-indigo-400 text-sm md:text-base cursor-pointer md:hover:text-indigo-300'>
                Lorem Ipsum →
            </div>
        </div>
        <div className='flex flex-col gap-[1.5rem]'>
            <div className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[2.5rem] rounded-lg overflow-hidden'>
               <img src={icon} alt="icon" className='w-full h-full'/>
            </div>
            <div className='text-white text-sm font-extrabold md:text-lg'>
                Server Monitoring
            </div>
            <div className='text-gray-400 text-xs md:text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className='text-indigo-400 text-sm md:text-base cursor-pointer md:hover:text-indigo-300'>
                Lorem Ipsum →
            </div>
        </div>
        <div className='flex flex-col gap-[1.5rem]'>
            <div className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[2.5rem] rounded-lg overflow-hidden'>
               <img src={icon} alt="icon" className='w-full h-full'/>
            </div>
            <div className='text-white text-sm font-extrabold md:text-lg'>
                Server Monitoring
            </div>
            <div className='text-gray-400 text-xs md:text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className='text-indigo-400 text-sm md:text-base cursor-pointer md:hover:text-indigo-300'>
                Lorem Ipsum →
            </div>
        </div>
      </div>
      <div className='flex flex-col gap-[1.5rem] mt-[4rem] items-center'>
        <div className='text-base text-indigo-400 md:text-xl'>
           Everything you need
        </div>
        <div className='text-white text-lg font-bold text-center md:text-2xl'>
           No Server? No Problem
        </div>
        <div className='text-gray-400 text-center text-xs md:text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className='w-full md:h-[fit-content]'>
        <img src={image2} alt="dashboard" className='w-full' />
      </div>
      <div className='flex flex-col gap-[2rem] mt-[2rem] md:grid grid-cols-3'>
      <div className='flex gap-[1rem]'>
        <div className='w-[2.5rem] h-[fit-content] md:w-[3.5rem]'>
          <img src={settings} alt="setting" className='w-full h-full'/>
        </div>
        <div className='text-gray-400 text-sm'>
        <span className='text-white font-extrabold text-sm md:text-base'>Push to Deploy. </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </div>
      </div>
      <div className='flex gap-[1rem]'>
        <div className='w-[2.5rem] h-[fit-content] md:w-[3.5rem]'>
          <img src={settings} alt="setting" className='w-full h-full'/>
        </div>
        <div className='text-gray-400 text-sm'>
        <span className='text-white font-extrabold text-sm md:text-base'>SSL Certificates. </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </div>
      </div>
      <div className='flex gap-[1rem]'>
        <div className='w-[2.5rem] h-[fit-content] md:w-[3.5rem]'>
          <img src={settings} alt="setting" className='w-full h-full'/>
        </div>
        <div className='text-gray-400 text-sm'>
        <span className='text-white font-extrabold text-sm md:text-base'>Simple Queues. </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </div>
      </div>
      <div className='flex gap-[1rem]'>
        <div className='w-[2.5rem] h-[fit-content] md:w-[3.5rem]'>
          <img src={settings} alt="setting" className='w-full h-full'/>
        </div>
        <div className='text-gray-400 text-sm'>
        <span className='text-white font-extrabold text-sm md:text-base'>Advanced Security. </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </div>
      </div>
      <div className='flex gap-[1rem]'>
        <div className='w-[2.5rem] h-[fit-content] md:w-[3.5rem]'>
          <img src={settings} alt="setting" className='w-full h-full'/>
        </div>
        <div className='text-gray-400 text-sm'>
        <span className='text-white font-extrabold text-sm md:text-base'>Powerful API. </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </div>
      </div>
      <div className='flex gap-[1rem]'>
        <div className='w-[2.5rem] h-[fit-content] md:w-[3.5rem]'>
          <img src={settings} alt="setting" className='w-full h-full'/>
        </div>
        <div className='text-gray-400 text-sm'>
        <span className='text-white font-extrabold text-sm md:text-base'>Database backups. </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </div>
      </div>
      </div>
      <div className='flex flex-col gap-[1.5rem] mt-[4rem] items-center'>
        <div className='text-base text-indigo-400 md:text-2xl'>
           Our Track Record
        </div>
        <div className='text-white text-lg font-bold text-center md:text-2xl'>
          Trusted by thousands of developers worldwide
        </div>
        <div className='text-gray-400 text-center text-xs md:text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className='flex flex-col gap-[3rem] mt-[2rem]  md:w-full md:flex-row md:justify-around'>
            <div className='flex flex-col gap-2 text-center'>
                  <div className='text-white text-base font-extrabold md:text-xl'>
                    8000+
                  </div>
                  <div className='text-white text-xs md:text-lg'>
                    Developers in the platform
                  </div>
            </div>
            <div className='flex flex-col gap-2 text-center'>
                  <div className='text-white text-base font-extrabold md:text-xl'>
                    900m+
                  </div>
                  <div className='text-white text-xs md:text-lg'>
                    Daily users
                  </div>
            </div>
            <div className='flex flex-col gap-2 text-center'>
                  <div className='text-white text-base font-extrabold md:text-xl'>
                    99.9%
                  </div>
                  <div className='text-white text-xs md:text-lg'>
                    Accuracy
                  </div>
            </div>
            <div className='flex flex-col gap-2 text-center'>
                  <div className='text-white text-base font-extrabold md:text-xl'>
                    12m
                  </div>
                  <div className='text-white text-xs md:text-lg'>
                    Projects Deployed
                  </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
