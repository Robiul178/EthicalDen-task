import queto from "/src/assets/icon-park_quote.png";
import star from "/src/assets/material-symbols_star.png";
import avatar from '/src/assets/img/Ellipse 2.png'
import avatar1 from '/src/assets/img/Ellipse 2 (1).png'
import avatar11 from '/src/assets/img/Ellipse 2 (2).png'


const StudentSay = () => {
    return (
        <section>
            <div>
                <h2 className="text-5xl font-bold">
                    <span className="text-[#F79B2C] "> What’s </span>  Our student say
                </h2>
                <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="flex gap-4">
                <div className="w-[365px] h-[270px] border bg-white p-4">
                    <img src={queto} className="py-4" alt="" />
                    <p>We are the representatives of more than 30+ <br /> universities in Australian countries <br /> and our admission</p>
                    <div className="flex gap-2 py-2">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div className="flex gap-4">
                        <div className="avatar">
                            <div className="w-12 h-12 rounded-full">
                                <img src={avatar} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">Lisa Dowen</h2>
                            <p >Student</p>
                        </div>
                    </div>
                </div>

                <div className="w-[365px] h-[270px] border-b-4 border-[#F79B2C] bg-white p-4">
                    <img src={queto} className="py-4" alt="" />
                    <p>We are the representatives of more than 30+ <br /> universities in Australian countries <br /> and our admission</p>
                    <div className="flex gap-2 py-2">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div className="flex gap-4">
                        <div className="avatar">
                            <div className="w-12 h-12 rounded-full">
                                <img src={avatar1} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">Lisa Dowen</h2>
                            <p >Student</p>
                        </div>
                    </div>
                </div>
                <div className="w-[365px] h-[270px] border bg-white p-4">
                    <img src={queto} className="py-4" alt="" />
                    <p>We are the representatives of more than 30+ <br /> universities in Australian countries <br /> and our admission</p>
                    <div className="flex gap-2 py-2">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div className="flex gap-4">
                        <div className="avatar">
                            <div className="w-12 h-12 rounded-full">
                                <img src={avatar11} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">Lisa Dowen</h2>
                            <p >Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentSay;