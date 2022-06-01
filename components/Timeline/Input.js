import {
    CalendarIcon,
    ChartBarIcon,
    EmojiHappyIcon,
    PhotographIcon,
    XIcon,
  } from "@heroicons/react/outline";
  import React from "react";
  import { useRef, useState } from "react";
  import { useRouter } from "next/router";
  import { Button, Spinner } from "@chakra-ui/react";

  function Input() {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState()
    const Router = useRouter()


    

    const sendPost = async (e) => {
      e.preventDefault();
  
      try {
        setLoading(true)
        const content =  {input} ;
        await fetch('/api/tweet', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(content)
        }).then(response => {
          if(response.status === 200) {
            setInput('')
            setLoading(false);
          }

        })
         Router.push('/')
      } catch (error) {
        console.error(error);
      }
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
              <Button rounded={'3xl'} onClick={sendPost} bgColor='twitter.600' _hover={{bgColor:'twitter.600'}}>
               {loading ? (
              <Spinner size={"md"} />
            ) :
              `Tweet`
            }
            </Button>
            </div>
       
        </div>
      </div>
    );
  }
  
  export default React.memo(Input);