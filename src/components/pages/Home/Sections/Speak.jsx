
import img from '/src/assets/img/Image (1).png'
import imgg from '/src/assets/img/Image (2).png'
import imggg from '/src/assets/img/Image.png'
import left from '/src/assets/teenyicons_arrow-left-outline (1).png'
import right from '/src/assets/teenyicons_arrow-left-outline.png'

const Speak = () => {
    return (
        <div className="max-w-full pt-44">
            <div
                className="relative  h-80 w-full bg-cover bg-center bg-[url('/src/assets/happyGirl.jpg')]"
            >

                <div className="absolute inset-0 bg-black bg-opacity-90"></div>

                <div className="relative z-10 p-4 text-center text-white ">
                    <div className=" pt-10">
                        <h2 className="text-5xl font-bold">
                            Student's  <span className="text-[#F79B2C] "> Speak </span>
                        </h2>
                        <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className='flex gap-4 justify-center py-6'>
                        <div className='w-[328px] h-[300px] text-black bg-white mt-8'>
                            <div className="p-4">
                                <img src={img} className='w-full' alt="" />
                                <h2 className="text-xl font-bold">Rashmi Borah</h2>
                                <p>Northeastern University, Boston</p>
                            </div>
                        </div>
                        <div className='w-[400px] h-[356px] text-black bg-white'>
                            <div className="p-4">
                                <img src={imggg} className='w-full' alt="" />
                                <h2 className="text-xl font-bold">Rashmi Borah</h2>
                                <p>Northeastern University, Boston</p>
                            </div>
                        </div>
                        <div className='w-[328px] h-[300px] text-black bg-white mt-8'>
                            <div className="p-4">
                                <img src={imgg} className='w-full' alt="" />
                                <h2 className="text-xl font-bold">Rashmi Borah</h2>
                                <p>Northeastern University, Boston</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-3'>
                        <div className='bg-red-200 rounded-full p-3'>
                            <img src={left} alt="" />
                        </div>
                        <div className='bg-yellow-200 rounded-full p-3'>
                            <img src={right} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Speak;