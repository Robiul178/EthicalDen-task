import { FaArrowRight } from 'react-icons/fa';
import img15 from '../../../../assets/img/image 15.png';
import star from '/src/assets/material-symbols_star.png';

const Study = () => {
    return (
        <section className="flex py-44 gap-12">
            <div>
                <img src={img15} alt="" />
            </div>
            <div>
                <h2 className="text-5xl font-bold">

                    Why Study
                    <span className="text-[#F79B2C] "> in USA?</span>
                </h2>
                <p className='py-4'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots <br />
                    in a piece of classical Latin literature from 45 BC, making it over 2000 years <br />
                    old. Richard McClintock, a Latin professor at Hampden-
                </p>

                <div>
                    <p className="text-lg font-bold py-2">Quick facts</p>
                    <ul>
                        <li className='flex gap-2 py-2'><img src={star} alt="" />USA hosts more than a million international students</li>
                        <li className='flex gap-2 py-2'><img src={star} alt="" />Over 25% of world’s top 100 universities are in the USA</li>
                        <li className='flex gap-2 py-2'><img src={star} alt="" />Post-study stay back visas (OPT) up to 3 years for STEM programs</li>
                        <li className='flex gap-2 py-2'><img src={star} alt="" />Internships (CPT) up to 12 months while studying</li>
                        <li className='flex gap-2 py-2'><img src={star} alt="" />Merit Based & Need Based Scholarships</li>
                    </ul>
                </div>
                <button className="border px-6 py-1 text-white bg-[#F79B2C] font-semibold flex gap-3 mt-3">See More <FaArrowRight className="mt-1" /></button>
            </div>
        </section>
    );
};

export default Study;