import React from "react";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import { Button } from "../components/Button.tsx";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext.tsx";

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const { toggle } = useSidebarContext();

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button onClick={toggle} variant="nobackground" size="icon"><Menu /></Button>
        <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" className="h-6" alt="Logo" /></a>
      </div>
      <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
        {showFullWidthSearch && <Button onClick={() => setShowFullWidthSearch(false)} type="button" size="icon" variant="nobackground" className="flex-shrink-0"><ArrowLeft /></Button>}
        <div className="flex flex-grow max-w-[600px]">
          <input type="search" placeholder="Search" className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0"><Search /></Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0"><Mic /></Button>
      </form>
      <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button onClick={() => setShowFullWidthSearch(true)} size="icon" variant="nobackground" className="md:hidden"><Search /></Button>
        <Button size="icon" variant="nobackground" className="md:hidden"><Mic /></Button>
        <Button size="icon" variant="nobackground"><Upload /></Button>
        <Button size="icon" variant="nobackground"><Bell /></Button>
        <Button size="icon" variant="nobackground"><User /></Button>
      </div>
    </div>
  );
}
