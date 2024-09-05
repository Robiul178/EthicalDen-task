import image from '/src/assets/blog/image 12 (1).png'
import image2 from '/src/assets/blog/image 12 (2).png'
import image3 from '/src/assets/blog/image 12.png'
import calender from '/src/assets/blog/ph_calendar-light.png'
import group from '/src/assets/blog/Group.svg'
import vector from '/src/assets/blog/Vector.png'

const Blog = () => {
    return (
        <section className="py-44">
            <div className="text-center ">
                <h2 className="text-5xl font-bold">Our Latest
                    <span className="text-[#F79B2C] "> Blog</span>

                </h2>
                <p className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className="flex justify-center gap-8 mt-8">
                <article className="flex flex-col dark:bg-gray-50">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image3} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase flex gap-2">
                            <img src={calender} alt="" /> July 23, 2024
                        </a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                        <div className="flex justify-between pt-3  text-xs dark:text-gray-600 border-t-2">
                            <div className='flex'><img src={group} alt="" />
                                <p>Black theme</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={vector} alt="" /><p>2.1K comment</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col dark:bg-gray-50">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image2} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase flex gap-2">
                            <img src={calender} alt="" /> July 23, 2024
                        </a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                        <div className="flex justify-between pt-3  text-xs dark:text-gray-600 border-t-2">
                            <div className='flex'><img src={group} alt="" />
                                <p>Black theme</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={vector} alt="" /><p>2.1K comment</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="flex flex-col dark:bg-gray-50">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase flex gap-2">
                            <img src={calender} alt="" /> July 23, 2024
                        </a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                        <div className="flex justify-between pt-3  text-xs dark:text-gray-600 border-t-2">
                            <div className='flex'><img src={group} alt="" />
                                <p>Black theme</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={vector} alt="" /><p>2.1K comment</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    );
};

export default Blog;