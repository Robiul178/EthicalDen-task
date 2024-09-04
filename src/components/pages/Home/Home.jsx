import ApplicationProcess from "./Sections/ApplicationProcess";
import Banner from "./Sections/Banner";
import Careers from "./Sections/Careers";
import Study from "./Sections/Study";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-6xl mx-auto">
                <ApplicationProcess />
                <Study />
                <Careers />
            </div>
        </div>
    );
};

export default Home;