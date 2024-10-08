import React, { useState } from "react";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

export default function FaQ({question,answer}){
  const [isActive, setIsActive] = useState(false); 
    return(
          <>
              <div className="mb-5 border-b">
                <div className="flex flex-row mb-2" onClick={() => setIsActive(!isActive)} >
                  <div className="w-96 font-worksans font-semibold lg:text-sm mv:text-xl text-purple-950 hover:text-purple-700 ">
                    {question}
                  </div>
                  <img  src={isActive ? minus : plus} />
                </div>
                {isActive && 
                  <div className="font-worksans lg:text-sm mv:text-xl leading-relaxed mb-2 mt-1 text-gray-400 ">
                      {answer}
                  </div>}
              </div>
          </>
    )
}



