import React from "react";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: { id: string; name: string; profileUrl: string };
  views: number;
  postedAt: string;
  duration: string;
  thumbnailUrl: string;
};

export const VideoGridItem: React.FC<VideoGridItemProps> = ({ id, title, channel, views, postedAt, duration, thumbnailUrl }) => (
  <div className="flex flex-col gap-2">
    <a href={`/watch?v=${id}`} className="relative aspect-video">
      <img src={thumbnailUrl} className="block w-full h-full object-cover transition-[border-radius] duration-200 rounded-xl" />
      <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
        {duration}
      </div>
    </a>
    <div className="flex gap-2">
      <a href={`/@${channel.id}`} className="flex-shrink-0">
        <img className="w-12 h-12 rounded-full" src={channel.profileUrl} alt={`${channel.name}'s profile`} />
      </a>
      <div className="flex flex-col">
        <a href={`/watch?v=${id}`} className="font-bold">
          {title}
        </a>
        <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
          {channel.name}
        </a>
        <div className="text-secondary-text text-sm">
          {views} Views • {postedAt}
        </div>
      </div>
    </div>
  </div>
);
