// import girl from '../../../../assets/happyGirl.jpg'

const Banner = () => {
    return (
        <div className="max-w-full">
            <div
                className="relative  h-64 w-full bg-cover bg-center bg-[url('/src/assets/happyGirl.jpg')]"
            >

                <div className="absolute inset-0 bg-black bg-opacity-70"></div>

                <div className="relative z-10 p-4 text-white ">
                    <div className="flex justify-between mt-16 px-44">
                        <h1 className="text-5xl font-bold">Study In Us</h1>
                        <p>Home/Study Distention/USA</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;