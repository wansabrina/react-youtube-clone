import React from "react";
import { PageHeader } from "./layouts/PageHeader.tsx";
import { Sidebar } from "./layouts/Sidebar.tsx";
import { SidebarProvider } from "./contexts/SidebarContext.tsx";
import { menuItems, videoData } from "./data/home.ts";

export default function ProfilePage() {

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="h-112 w-400">
                <img src="https://pbs.twimg.com/media/GDk4otjawAArB9q?format=png&name=4096x4096" alt="banner" />
            </div>
            <div className="-mt-1 bg-grey-lighter">
              <div className="container mx-auto">
                <div className="flex justify-between items-center py-4 px-16">
                  <div className="flex items-center">
                    <img className="w-24 h-24 rounded-full" src="https://static-00.iconduck.com/assets.00/buzzfeed-icon-512x512-4fjvv52c.png" alt="channel_logo"/>
                    <div className="ml-6">
                      <div className="text-2xl font-normal flex items-center">
                        <span className="mr-2">BuzzFeed</span>
                      </div>
                      <p className="mt-2 font-hairline text-sm">126,014 subscribers</p>
                    </div>
                  </div>
                  <div className="text-grey-dark">
                    <button className="appearance-none px-3 py-2 bg-grey-light uppercase text-grey-darker text-sm mr-4">Subscribed 126K</button>
                    <span><i className="fa fa-bell fa-lg" aria-hidden="true"></i></span>
                  </div>
                </div>
                <div className="px-16">
                  <ul className="list-reset flex">
                    {menuItems.map((menuItem, index) => (
                      <li className={`text-center py-3 px-8${index === 0 ? ' border-b-2 border-solid border-grey-dark' : ''}`} key={index}>
                        <a href={menuItem.href} className={`hover:text-black ${index === 6 ? 'text-grey-dark' : 'text-black'}`}>
                          {menuItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="container mx-auto flex">
              <div className="w-3/4 mx-16 py-6">
                <div className="border-b pb-8">
                  <div className="flex">
                    <div className="w-3/4 flex">
                      <div>
                        <img className="block w-full" src="https://m.media-amazon.com/images/S/pv-target-images/fb8166566a80e1f8bdc21766cafc4ad4211ff57f5d8fb11fcbe6be33035f761c.png" alt=""/>
                      </div>
                      <div className="pl-4">
                        <p className="w-64 h-6 truncate text-sm font-medium mb-1">BuzzFeed Unsolved - Supernatural</p>
                        <p className="text-grey-darker text-xs"><span>BuzzFeed</span><span> &middot; </span><span> 7.5 views </span><span> &middot; </span><span> 2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b">
                  <h3 className="py-6 text-base font-medium">
                    Uploads
                    <span className="uppercase ml-3 text-grey-dark">Play all</span>
                  </h3>
                  <div className="flex mb-4 relative">
                    <div className="container mx-auto flex">
                      {videoData.map((video, index) => (
                        <div className="flex-1 mr-1" key={index}>
                          <div>
                            <img src={video.imageUrl} alt=""/>
                          </div>
                          <div className="mb-4 mt-1">
                            <h4 className="text-sm font-medium">{video.title}</h4>
                            <p className="mt-1 font-hairline text-xs text-grey-darker">
                              {video.views} &middot; {video.uploadDate}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
