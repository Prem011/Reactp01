import React from 'react'

const GameTwo = () => {
 
    return (
        <div className='w-full h-screen bg-[url(./public/page7/Alabay_heritage_prev_gradient.png)] bg-no-repeat bg-cover pl-[4.219vw] fixed'>
  
          <div className="w-[1.7vw] h-[14.844vw] top-[20.383vw] right-[2vw] absolute flex flex-col justify-between " >
  
              <div className="w-[1.7vw] h-[1.7vw] bg-slate-400 p-2 rotate-[-90deg] rounded-[.5vw] " >
                  <img src="https://img.icons8.com/?size=100&id=59862&format=png&color=ffffff" alt="" />
              </div>
              <div className="w-[1.7vw] h-[10.8vw] bg-slate-400  rounded-full " >
                  <div className="w-[1.7vw] h-[5.4vw] bg-[#90FFAE]  rounded-full" ></div>
              </div>
              <div className="w-[1.7vw] h-[1.7vw] bg-slate-400 p-2 rotate-[90deg] rounded-[.5vw] " >
                  <img src="https://img.icons8.com/?size=100&id=59862&format=png&color=ffffff" alt="" />
              </div>
              
          </div>
  
          <h1 className='text-white text-[5vw] w-[32.271vw] font-[Barron] pt-[5.135vw] '>
          ALABAY GUARDIAN <br />
          </h1>
          <h1 className="bebas-neue-regular text-[2.5vw]  text-[#90FFAE]" >
              SHEPHERD OF THE STEPPES
          </h1>
  
          <div className="w-full h-[41.333vw] overflow-y-scroll noScrollBar" >
              
              <div className="mb-[3vw]" >
                  <p className="text-[1.146vw] text-[#FFFFFF] font-bold mt-[2vw]" >
                  Take on the role of the legendary Alabay on a <br /> quest to uncover the ancient secrets of its <br /> ancestors. 
                  </p>
  
                  <button className="bg-[#90FFAE] px-[1vw] py-2 flex justify-center items-center gap-[1vw] mt-[2vw] rounded-full" >
                      <img className="w-[32%]" src="https://img.icons8.com/?size=100&id=36067&format=png&color=000000" alt="" />
                      <h1 className="font-bold text-[1.096vw]" >PLAY</h1>
                  </button>
  
                  <div className="mt-[5vw]" >
                      <h1 className="text-[1.667vw] font-semibold text-white"><span className="text-[#90FFAE] " >GAME</span> PREVIEW</h1>
  
                      <div className="flex gap-[3vw] mt-[2vw] " >
                          <img className="w-[25vw] h-[16.016vw] border-4 rounded-[2vw] border-white" src="./public/LostDog/overview.png" alt="" />
                          <img className="w-[16.016vw] h-[16.016vw] border-4 rounded-[2vw] border-white" src="./public/LostDog/Abilities.png" alt="" />
                          <img className="w-[16.016vw] h-[16.016vw] border-4 rounded-[2vw] border-white" src="./public/LostDog/artifacts.png" alt="" />
                          <img className="w-[25vw] h-[16.016vw] border-4 rounded-[2vw] border-white" src="./public/LostDog/locationspreview.png" alt="" />
  
                      </div>
  
                  </div>
              </div>
  
              <div className="w-[70.781vw] h-[33.333vw]  " >
  
                  <p className="text-[1.5vw] text-[#90FFAE] font-bold mt-[5vw]" >FEATURES</p>
  
                      <p className="text-[1.146vw] text-white font-bold mt-[2vw]" >Explore a variety of landscapes, including <span className="text-[#90FFAE]" >mountains</span>, <span className="text-[#90FFAE]" >forests</span>, <span className="text-[#90FFAE]" >deserts</span>, and <span className="text-[#90FFAE]" >ancient ruins</span>.
                      
                      <br /><br />
                      Use the Alabay's <span className="text-[#90FFAE]" >abilities</span> to solve <span className="text-[#90FFAE]" >puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.
                      <br /><br />
                      Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.
                      <br /><br />
                      Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.
                      <br /><br />
                      Challenge Modes: <br />
                      <span className="ml-[1vw]" >
                             - <span className="text-[#90FFAE]" >Time Trials</span>: Compete in special timed challenges where the Alabai must navigate through complex mazes or
                               complete puzzles within a time limit. <br />
                      </span>
                          
                      <span className="ml-[1vw]" >
                         - <span className="text-[#90FFAE]" >Exploration Mastery</span>: A mode that rewards players for fully exploring every nook and cranny of the game’s world,
                      uncovering all secrets <br />
                      </span>
                      
                  </p>
  
                  <div className="flex gap-[2vw] mb-[3vw]" >
                      <button className="bg-white mb-[4vw] px-[1vw] py-2 flex justify-center items-center gap-[1vw] mt-[2vw] rounded-full" >
                          <img className="w-[32%]" src="https://img.icons8.com/?size=100&id=36067&format=png&color=000000" alt="" />
                          <h1 className="font-bold text-[1.096vw]" >PLAY</h1>
                      </button><button className="text-white border-4 border-white mb-[4vw] px-[3.5vw] py-2 flex justify-center items-center gap-[1vw] mt-[2vw] rounded-full" >
                          {/* <img className="w-[32%]" src="https://img.icons8.com/?size=100&id=36067&format=png&color=000000" alt="" /> */}
                          <h1 className="font-bold text-[1.096vw]" >Exit</h1>
                      </button>
                  </div>
  
              </div>
              
          </div>
  
        </div>
      );
  
}

export default GameTwo


