import { FaArrowRight } from 'react-icons/fa'
import img1 from '../../../../assets/uni/image 17 (1).png'
import img2 from '../../../../assets/uni/image 17 (2).png'
import img3 from '../../../../assets/uni/image 17 (3).png'
import img4 from '../../../../assets/uni/image 17 (4).png'
import img5 from '../../../../assets/uni/image 17 (5).png'
import img6 from '../../../../assets/uni/image 17.png'

const University = () => {
    return (
        <div className="max-w-full">
            <div className="relative h-[800px] w-full bg-cover bg-fixed bg-center bg-[url('/src/assets/OIP.jpg')]">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>

                <div className="relative z-10 p-4 text-white text-center pt-28  max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold">
                        <span className="text-[#F79B2C] "> Popular  </span> Universities
                    </h2>
                    <div className='grid grid-cols-3 gap-6 py-12'>
                        <div className='border w-[365px] h-[205px] py-6 bg-white text-black'>
                            <img
                                className="w-[70px] mx-auto h-[70px]"
                                src={img1}
                                alt="img"
                            />
                            <h2 className="text-lg font-bold mt-6">University of Connecticut, Connecticut
                                (Public Ivy)</h2>
                        </div>
                        <div className='border w-[365px] h-[205px] py-6 bg-white text-black'>
                            <img
                                className="w-[70px] mx-auto h-[70px]"
                                src={img2}
                                alt="img"
                            />
                            <h2 className="text-lg font-bold mt-6">Arizona State University, Phoenix, Arizona</h2>
                        </div>
                        <div className='border w-[365px] h-[205px] py-6 bg-white text-black'>
                            <img
                                className="w-[70px] mx-auto h-[70px]"
                                src={img3}
                                alt="img"
                            />
                            <h2 className="text-lg font-bold mt-6">University of California, Riverside, California </h2>
                        </div>
                        <div className='border w-[365px] h-[205px] py-6 bg-white text-black'>
                            <img
                                className="w-[70px] mx-auto h-[70px]"
                                src={img4}
                                alt="img"
                            />
                            <h2 className="text-lg font-bold mt-6">Arizona State University, Phoenix, Arizona </h2>
                        </div>
                        <div className='border w-[365px] h-[205px] py-6 bg-white text-black'>
                            <img
                                className="w-[70px] mx-auto h-[70px]"
                                src={img5}
                                alt="img"
                            />
                            <h2 className="text-lg font-bold mt-6">University of California, Riverside, California </h2>
                        </div>
                        <div className='border w-[365px] h-[205px] py-6 bg-white text-black'>
                            <img
                                className="w-[70px] mx-auto h-[70px]"
                                src={img6}
                                alt="img"
                            />
                            <h2 className="text-lg font-bold mt-6">University of Connecticut, Connecticut
                                (Public Ivy)</h2>
                        </div>
                    </div>
                    <div className=' flex justify-center'>
                        <button className="border px-6 py-2 border-white font-semibold flex gap-3">View More <FaArrowRight className="mt-1" /></button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default University;