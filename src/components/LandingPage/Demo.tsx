"use client"

import YouTube from "react-youtube"

import { CurlyArrow } from "@/components/SVG/Arrows"
import { projectName } from "@/config/next-inject"

export const Demo = () => {
  return (
    <div id="demo" className="w-full bg-gray-500 dark:bg-gray-800/30">
      <div className="relative mx-auto my-44 flex max-w-5xl flex-col items-center space-y-6">
        {/* A curly arrow pointing to the youtube video on the right. */}
        <div className="absolute -left-4 top-1/4 flex -translate-x-full flex-col items-center gap-1 text-sm text-white/70 max-lg:hidden">
          <p>{projectName} in 1 minute</p>
          <CurlyArrow />
        </div>
        {/* The Youtube demo video, responsive to all screen sizes. */}
        <YoutubeDemo id="bF0WCDBd5x0" />
      </div>
    </div>
  )
}

const YoutubeDemo = ({ id }: { id: string }) => {
  const opts = {}
  return (
    <div className="relative aspect-video w-full overflow-hidden">
      <YouTube
        iframeClassName="absolute h-full w-full"
        videoId={id}
        opts={opts}
      />
    </div>
  )
}
