const Hero = () => (
    <section className="m-auto flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div>
                <img
                    alt="Hero"
                    src="https://i.ibb.co/bFg1nKJ/hero.jpg"
                    className="h-[900px] w-80 sm:h-full rounded-2xl -z-50"
                />
            </div>
            <div>
                <div className="absolute m-4 text-white text-7xl w-[700px] p-2 z-10 w-[150%] right-[24%] leading-[1.2] z-30">
                    Turn your website into the best salesperson
                </div>
                <div className="absolute mt-[300px] ml-20 w-50">

                    <div className="flex flex-col gap-4">
                        <div>
                            Triple your sales with a pixel-perfect website. <br />
                            At SmartSite Studio, we don’t just design and write code, <br /> we build a revenue-driving machine for your business.
                        </div>
                        <div className="flex flex-row gap-2">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                Talk to us
                            </button>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                See portfolio
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
);

export default Hero;
