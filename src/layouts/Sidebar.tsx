import React from "react";
import { Clapperboard, Home, ListVideo } from "lucide-react";
import { SmallSidebarItem, LargeSidebarSection, LargeSidebarItem } from "../components/SidebarItem.tsx";
import { playlists, sidebarData, visibleItemsData, exploreData } from "../data/sidebar.ts";
import { useSidebarContext } from "../contexts/SidebarContext.tsx";
import { PageHeader } from "./PageHeader.tsx";
import { Link } from "react-router-dom";

export function Sidebar() {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();

  return (
    <>
      <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${isLargeOpen ? "lg:hidden" : "lg:flex"}`}>
        {sidebarData.map((item, index) => (
          <SmallSidebarItem key={index} {...item} />
        ))}
      </aside>
      {isSmallOpen && <div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50" />}
      <aside className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${isLargeOpen ? "lg:flex" : "lg:hidden"} ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}>
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white"><PageHeader /></div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImgUrl={Home} title="Home" url="/" />
          <LargeSidebarItem IconOrImgUrl={Clapperboard} title="Subscriptions" url="/subscriptions" />
        </LargeSidebarSection><hr />
        <LargeSidebarSection visibleItemCount={5}>
          {visibleItemsData.map((item, index) => ( //melakukan perulangan melalui setiap elemen dalam array VisibleItemsData
            <LargeSidebarItem key={index} {...item} /> // di tiap iterasi kita mmbuat elemen LargeSidebarItem dengan beberapa properti yg telah didefinisikan, key untuk indentifikasi tiap elemen
          )) // ...item itu untuk mengirim semua properti dari array ke largesidebaritem, intinya buat ngambil informasi dari data item buat ditampilin di largesideebaritem
          }
          {playlists.map(playlist => <LargeSidebarItem key={playlist.id} IconOrImgUrl={ListVideo} title={playlist.name} url={`/playlist?list=${playlist.id}`} />)}
        </LargeSidebarSection><hr />
        <LargeSidebarSection title="Subscriptions">
        <Link to="/profile">
          <LargeSidebarItem IconOrImgUrl="https://static-00.iconduck.com/assets.00/buzzfeed-icon-512x512-4fjvv52c.png" title="BuzzFeed" url={""} />
        </Link>
      </LargeSidebarSection>
        <LargeSidebarSection title="Explore">
          {exploreData.map((item, index) => (
            <LargeSidebarItem key={index} {...item} />
          ))}
        </LargeSidebarSection>
      </aside>
    </>
  );
}
