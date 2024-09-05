
import img15 from '../../../../assets/img/image 15 (2).png';

const CostOfEducation = () => {
    return (
        <section className="flex py-44 gap-12">
            <div>
                <img
                    className='w-[1100px]'
                    src={img15} alt="" />
            </div>
            <div>
                <h2 className="text-5xl font-bold">
                    <span className="text-[#F79B2C] "> Cost </span>of education
                </h2>
                <p className='py-4 leading-6'>
                    In the U.S., tuition fees vary based on the state, the university funding model, and the student’s country of origin. So, listing an average is a rather difficult task. However, thanks to the folks at College Board,
                    they’ve rendered an estimate of last year’s average tuition costs, which will roughly reflect the next few years.
                </p>

                <div>
                    <ul className="list-disc list-inside">
                        <li className='font-bold text-yellow-500'>Total Expenses 41535</li>
                        <li>Tuition Fees for one-year (Indicative) 25000</li>
                        <li>Living and Accommodation 15000</li>
                        <li>Airfare from India to USA 1000</li>
                        <li>Visa Fees (Visa & SEVIS) 535</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CostOfEducation;