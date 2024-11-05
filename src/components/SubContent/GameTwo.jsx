import React from 'react'

const GameTwo = () => {

    return (
        <div className='w-full min-h-screen bg-[url(./Alabay_heritage_prev_gradient.png)] bg-no-repeat bg-cover pl-[5%] fixed'>
            <h1 className='text-white text-[6vw] sm:text-[5vw] w-[90%] sm:w-[32.271vw] font-[Barron] pt-[10%] sm:pt-[5.135vw]'>
                ALABAY GUARDIAN <br />
            </h1>
            <h1 className="bebas-neue-regular text-[4vw] sm:text-[2.5vw] text-[#90FFAE]">
                SHEPHERD OF THE STEPPES
            </h1>

            <div className="w-full h-[auto] sm:h-[41.333vw] overflow-y-scroll game2ScrollBar mt-[2%]">
                <div className="mb-[5vw] sm:mb-[3vw]">
                    <p className="text-[4vw] sm:text-[1.146vw] text-[#FFFFFF] font-bold mt-[5vw] sm:mt-[2vw]">
                        Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
                    </p>

                    <button className="bg-[#90FFAE] px-[5%] py-[2%] flex justify-center items-center gap-[1vw] mt-[5vw] sm:mt-[2vw] rounded-full">
                        <img className="w-[15%] sm:w-[32%]" src="https://img.icons8.com/?size=100&id=36067&format=png&color=000000" alt="Play" />
                        <h1 className="font-bold text-[4vw] sm:text-[1.096vw]">PLAY</h1>
                    </button>

                    <div className="mt-[8vw] sm:mt-[5vw]">
                        <h1 className="text-[5vw] sm:text-[1.667vw] font-semibold text-white">
                            <span className="text-[#90FFAE]">GAME</span> PREVIEW
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-[5vw] sm:gap-[3vw] mt-[5vw] sm:mt-[2vw]">
                            <img className="w-full sm:w-[25vw] h-[auto] sm:h-[16.016vw] border-4 rounded-[3vw] sm:rounded-[2vw] border-white" src="./overview.png" alt="Overview" />
                            <img className="w-full sm:w-[16.016vw] h-[auto] sm:h-[16.016vw] border-4 rounded-[3vw] sm:rounded-[2vw] border-white" src="./Abilities.png" alt="Abilities" />
                            <img className="w-full sm:w-[16.016vw] h-[auto] sm:h-[16.016vw] border-4 rounded-[3vw] sm:rounded-[2vw] border-white" src="./artifacts.png" alt="Artifacts" />
                            <img className="w-full sm:w-[25vw] h-[auto] sm:h-[16.016vw] border-4 rounded-[3vw] sm:rounded-[2vw] border-white" src="./locationspreview.png" alt="Locations" />
                        </div>
                    </div>
                </div>

                <div className="w-[90%] sm:w-[70.781vw] h-auto">
                    <p className="text-[5vw] sm:text-[1.5vw] text-[#90FFAE] font-bold mt-[8vw] sm:mt-[5vw]">FEATURES</p>

                    <p className="text-[4vw] sm:text-[1.146vw] text-white font-bold mt-[5vw] sm:mt-[2vw]">
                        Explore a variety of landscapes, including <span className="text-[#90FFAE]">mountains</span>, <span className="text-[#90FFAE]">forests</span>, <span className="text-[#90FFAE]">deserts</span>, and <span className="text-[#90FFAE]">ancient ruins</span>.
                        <br /><br />
                        Use the Alabay's <span className="text-[#90FFAE]">abilities</span> to solve <span className="text-[#90FFAE]">puzzles</span>.
                        <br /><br />
                        Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative.
                        <br /><br />
                        Unlock new skills and abilities for the Alabay.
                        <br /><br />
                        Challenge Modes: 
                        <br />
                        <span className="ml-[5%] sm:ml-[1vw]">
                              - <span className="text-[#90FFAE]">Time Trials</span>: Compete in timed challenges.
                        </span>
                        <br />
                        <span className="ml-[5%] sm:ml-[1vw]">
                              - <span className="text-[#90FFAE]">Exploration Mastery</span>: A mode that rewards players for fully exploring the game’s world.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-[5vw] sm:gap-[2vw] mb-[8vw] sm:mb-[3vw]">
                        <button className="bg-white mb-[8vw] sm:mb-[4vw] px-[5%] py-[2%] flex justify-center items-center gap-[1vw] mt-[5vw] sm:mt-[2vw] rounded-full">
                            <img className="w-[15%] sm:w-[32%]" src="https://img.icons8.com/?size=100&id=36067&format=png&color=000000" alt="Play" />
                            <h1 className="font-bold text-[4vw] sm:text-[1.096vw]">PLAY</h1>
                        </button>
                        <button className="text-white border-4 border-white mb-[8vw] sm:mb-[4vw] px-[10%] py-[2%] flex justify-center items-center gap-[1vw] mt-[5vw] sm:mt-[2vw] rounded-full">
                            <h1 className="font-bold text-[4vw] sm:text-[1.096vw]">Exit</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameTwo;
