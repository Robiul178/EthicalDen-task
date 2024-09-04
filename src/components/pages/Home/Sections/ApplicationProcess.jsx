import vector from '../../../../assets/Vector.svg'
import fluent from '../../../../assets/fluent_device-meeting-room-remote-20-regular.png'
import profile from '../../../../assets/mingcute_profile-line.svg'
import search from '../../../../assets/wpf_search.svg'
import pep from '../../../../assets/pepicons-pencil_cv.svg'
import carbon from '../../../../assets/carbon_data-class.png'
import carbonWeb from '../../../../assets/carbon_application-web.svg'
import visa from '../../../../assets/ri_visa-line.png'

const ApplicationProcess = () => {


    return (
        <main className="py-24">
            <section className="text-center">
                <h2 className="text-5xl font-bold">
                    <span className="text-[#F79B2C] ">Our </span>
                    Application Process
                </h2>
                <p className="py-6 leading-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do   eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>

            <section>
                <div className="flex justify-center mt-6">
                    <div className="border-2 border-[#898989] border-dashed rounded-full p-4"><img src={profile} className='w-[50px] h-[50px]' alt="" /></div>
                    <div className='border-[#898989] w-[132px] h-0 border-2 border-dashed  mt-10'></div>
                    <div className="border-[#898989] border-2 border-dashed rounded-full p-4"><img src={fluent} className='w-[50px] h-[50px]' alt="" /></div>
                    <div className='border-[#898989] w-[132px] h-0 border-2 border-dashed  mt-10'></div>
                    <div className="border-[#898989] border-2 border-dashed rounded-full p-4"><img src={search} className='w-[50px] h-[50px]' alt="" /></div>
                    <div className='border-[#898989] w-[132px] h-0 border-2 border-dashed  mt-10'></div>
                    <div className="border-[#898989] border-2 border-dashed rounded-full p-4"><img src={pep} className='w-[50px] h-[50px]' alt="" /></div>
                    <div className='border-[#898989] w-[132px] h-0 border-2 border-dashed  mt-10'></div>
                    <div className="border-[#898989] border-2 border-dashed rounded-full p-4"><img src={vector} className='w-[50px] h-[50px]' alt="" /></div>
                </div>
                <div className="flex justify-evenly mt-6 ">
                    <div className='w-[150px] h-[66px]  text-center border border-[#898989]'><h2 className='font-semibold p-2'>Client profile review</h2></div>
                    <div className='w-[150px] h-[66px]  text-center border border-[#898989]'><h2 className='font-semibold p-2'>Onboarding meeting</h2></div>
                    <div className='w-[150px] h-[66px]  text-center border border-[#898989]'><h2 className='font-semibold p-2'>University search</h2></div>
                    <div className='w-[150px] h-[86px]  text-center border border-[#898989]'><h2 className=' p-2'> <span className="font-semibold">Statement of</span> purpose,cv review and edit</h2></div>
                    <div className='w-[150px] h-[66px]  text-center border border-[#898989]'><h2 className='font-semibold p-2'>University Shortlist</h2></div>
                </div>
            </section>
            <section className=''>
                <div className="flex ps-24  mt-6">
                    <div className="border-[#898989] border-2 border-dashed rounded-full p-4"><img src={carbonWeb} className='w-[50px] h-[50px]' alt="" /></div>
                    <div className='border-[#898989] w-[132px] h-0 border-2 border-dashed  mt-10'></div>
                    <div className="border-[#898989] border-2 border-dashed rounded-full p-4"><img src={carbon} className='w-[50px] h-[50px]' alt="" /></div>
                    <div className='border-[#898989] w-[132px] h-0 border-2 border-dashed  mt-10'></div>
                    <div className="border-[#898989] border rounded-full p-4 bg-[#F79B2C]"><img src={visa} className='w-[50px] h-[50px]' alt="" /></div>
                </div>
                <div className="flex gap-[70px] mt-6 ps-16 ">
                    <div className='border-[#898989] w-[150px] h-[66px]  text-center border'><h2 className='font-semibold p-2'>University application</h2></div>
                    <div className='border-[#898989] w-[150px] h-[66px]  text-center border'><h2 className='font-semibold p-2'>Arranging mock interview</h2></div>
                    <div className='border-[#F79B2C] w-[150px] h-[66px] bg-white text-center border'><h2 className='font-semibold p-2'>Visa application for submission</h2></div>
                </div>
            </section>
        </main >
    );
};

export default ApplicationProcess;