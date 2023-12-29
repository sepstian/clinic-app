import React from 'react'
import SideNav from '../../components';

const DetailPage = () => {
    return (
        <>
            <div className='flex flex-row h-screen w-full'>
                <SideNav/>
                <div className='flex flex-col w-full mt-2 mr-6'>
                    <div className='flex flex-row justify-between ml-4 mr-4'>
                        <h1 className='text-base text-[#8F8E8E]'>Welcome, Cashier1</h1>
                        <h1 className='text-base text-[#8F8E8E]'>MM-DD-YYYY</h1>
                        <h1></h1>
                    </div>
                    <div className='mt-8 ml-4 mr-4 flex flex-row justify-end'>
                        <h1>Sort by : </h1>
                        <button className='bg-black text-white font-bold w-[60px] rounded-sm ml-4 mt-1'>Filter</button>
                    </div>

                    <div className='flex f mt-8 ml-8'>
                        <div className='w-1/3 p4 h-[250px] border border-black mr-10 mt-4 mb-4 ml-6'></div>
                        <div className='w-1/3 p4 h-[250px] border border-black mr-10 mt-4 mb-4 ml-6'></div>
                        <div className='w-1/3 p4 h-[250px] border border-black mr-10 mt-4 mb-4 ml-6'></div>
                     
                    </div>
                    <div className='flex f mt-8 ml-8'>
                        <div className='w-1/3 p4 h-[250px] border border-black mr-10 mt-4 mb-4 ml-6'></div>
                        <div className='w-1/3 p4 h-[250px] border border-black mr-10 mt-4 mb-4 ml-6'></div>
                        <div className='w-1/3 p4 h-[250px] border border-black mr-10 mt-4 mb-4 ml-6'></div>
                     
                    </div>
                 
                    

                </div>

            </div>
        </>
    )
}

export default DetailPage;