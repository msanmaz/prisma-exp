import React from 'react'
import {
    ChartBarIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    ShareIcon,
    SwitchHorizontalIcon,
    TrashIcon,
  } from "@heroicons/react/outline";
  import {
    HeartIcon as HeartIconFilled,
    ChatIcon as ChatIconFilled,
  } from "@heroicons/react/solid";
  import { useSession } from "next-auth/react";
  import { useRouter } from "next/router";
  import { useEffect, useState } from "react";
  import timeago from 'lib/timeago'


const Posts = ({post}) => {
    const { data: session } = useSession();

  return (
<>
<div
      className="p-3 flex cursor-pointer border-b border-gray-700"
      onClick={() => router.push(`/${post.author.name}/status/${post.id}`)}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div className={`flex justify-between`}>

            <img
              src={post?.author.image}
              alt="Profile Pic"
              className="h-11 w-11 rounded-full mr-4"
            />
          
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4
                className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${
                  !post && "inline-block"
                }`}
              >
                {post?.author.name}
              </h4>
              <span
                className={`text-sm sm:text-[15px]`}
              >
                @{post?.author.name}
              </span>
            </div>
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
            <span suppressHydrationWarning>{timeago.format(new Date(post.createdAt))}</span>

            </span>
 
              <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                {post?.content}
              </p>
        
          </div>
          <div className="icon group flex-shrink-0 ml-auto">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>
        <div
          className={`text-[#6e767d] flex justify-between w-10/12`}
        >
          <div
            className="flex items-center space-x-1 group"
          >
            <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>

          </div>

          {session.user.name === post?.author.name ? (
            <div
              className="flex items-center space-x-1 group"

            >
              <div className="icon group-hover:bg-red-600/10">
                <TrashIcon className="h-5 group-hover:text-red-600" />
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-1 group">
              <div className="icon group-hover:bg-green-500/10">
                <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
              </div>
            </div>
          )}

          <div
            className="flex items-center space-x-1 group"

          >
            <div className="icon group-hover:bg-pink-600/10">

                <HeartIcon className="h-5 group-hover:text-pink-600" />
              
            </div>

              <span
                className={`group-hover:text-pink-600 text-sm`}
              >
                0
              </span>
        
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
    
</>
  )
}

export default Posts