import { FaArrowRight } from 'react-icons/fa';
import img15 from '../../../../assets/img/image 15 (1).png';

const Careers = () => {
    return (
        <section className="flex py-44 gap-12">

            <div className='w-[558px]'>
                <h2 className="text-5xl font-bold">
                    <span className="text-[#F79B2C] "> Careers & </span>Industry
                </h2>
                <p className='py-6 leading-6'>
                    One of the most technologically powerful and dynamic countries, USA is the largest
                    & most dominant economy globally. Sectors that empower this world’s most productive
                    economy include Healthcare, Technology, Construction, Retail, Manufacturing, Finance
                    & Insurance and Real Estate. Top jobs with high remuneration prospects for international
                    students include Medicine, Computer & Information Systems Managers, Architectural &
                    Engineering Managers and Marketing & Financial Managers. Standard of living in the USA
                    is among the highest in the world with high per capita income. This nation performs
                    very well in many measures of well-being such as income & wealth,
                    health status, jobs and earnings, education & skills and environmental quality.
                </p>
                <button className="border px-6 py-2 bg-white border-[#F79B2C] font-semibold flex gap-3 mt-3">Read More <FaArrowRight className="mt-1" /></button>
            </div>
            <div>
                <img src={img15} alt="" />
            </div>
        </section>
    );
};

export default Careers;