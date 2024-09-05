
import img18 from '/src/assets/img/image 18.png'

const StudyInUsa = () => {
    return (
        <section className="flex mt-96 gap-12">
            <div className='w-[558px]'>
                <h2 className="text-5xl font-bold">Study in
                    <span className="text-[#F79B2C] ">  USA FAQ's </span>
                </h2>
                <p className='py-6 leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
                </p>
                {/* faq */}
                <div className="collapse collapse-plus bg-white rounded-none">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Can you work while studying in the United States?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-none mt-4">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can you work while studying in the United States?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-none mt-4">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can you work while studying in the United States?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white rounded-none mt-4">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can you work while studying in the United States?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                {/* faq */}
            </div>
            <div>
                <img src={img18} alt="" />
            </div>
        </section>
    );
};

export default StudyInUsa;