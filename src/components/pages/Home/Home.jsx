import ApplicationProcess from "./Sections/ApplicationProcess";
import Banner from "./Sections/Banner";
import Careers from "./Sections/Careers";
import CostOfEducation from "./Sections/CostOfEducation";
import Glance from "./Sections/Glance";
import StudentSay from "./Sections/StudentSay";
import Study from "./Sections/Study";
import University from "./Sections/University";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-6xl mx-auto">
                <ApplicationProcess />
                <Study />
                <Careers />
            </div>
            <University />
            <div className="max-w-6xl mx-auto">
                <CostOfEducation />
                <Glance />
                <StudentSay />
            </div>
        </div>
    );
};

export default Home;