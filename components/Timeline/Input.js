import {
    CalendarIcon,
    ChartBarIcon,
    EmojiHappyIcon,
    PhotographIcon,
    XIcon,
  } from "@heroicons/react/outline";
  import { useRef, useState } from "react";


  function Input() {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

  
    const sendPost = async () => {

        console.log('clicked')
  
      setLoading(false);
      setInput("");
    };
  


  
    return (
      <div
        className={`border-b w-full border-gray-700 p-3 flex space-x-3 scrollbar-hide ${
          loading && "opacity-60"
        }`}
      >
        <img
          src={'/blank-profile-picture.webp'}
          alt=""
          className="h-11 w-11 rounded-full cursor-pointer"
        />
        <div className="divide-y divide-gray-700 w-full">
          <div >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What's happening?"
              rows="2"
              className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
            />
  



          </div>
          {!loading && (
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex items-center">
                <div
                  className="icon"
                >
                  <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
                  <input
                    type="file"
                    hidden
                  />
                </div>
  
                <div className="icon rotate-90">
                  <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
                </div>
  
                <div className="icon">
                  <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
                </div>
  
                <div className="icon">
                  <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
                </div>

              </div>
              <button
                className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
                disabled={!input}
                onClick={sendPost}
              >
                Tweet
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Input;