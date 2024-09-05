import queto from "/src/assets/icon-park_quote.png";


const StudentSay = () => {
    return (
        <section>
            <div>
                <h2 className="text-5xl font-bold">
                    <span className="text-[#F79B2C] "> What’s </span>  Our student say
                </h2>
                <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div>
                <div className="w-[365px] h-[270px] py-4">
                    <img src={queto} alt="" />
                    <p>We are the representatives of more than 30+ <br /> universities in Australian countries <br /> and our admission</p>
                </div>
            </div>
        </section>
    );
};

export default StudentSay;