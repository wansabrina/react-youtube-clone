// SidebarItem.tsx
import React, { ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button.tsx";

type SmallSidebarItemProps = { Icon: ElementType; title: string; url: string };

export function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a href={url} className={twMerge(buttonStyles({ variant: "nobackground" }), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

type LargeSidebarSectionProps = { children: ReactNode; title?: string; visibleItemCount?: number };

export function LargeSidebarSection({ children, title, visibleItemCount = Number.POSITIVE_INFINITY }: LargeSidebarSectionProps) {
  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {children}
    </div>
  );
}

type LargeSidebarItemProps = { IconOrImgUrl: ElementType | string; title: string; url: string; isActive?: boolean };

export function LargeSidebarItem({ IconOrImgUrl, title, url, isActive = false }: LargeSidebarItemProps) {
  return (
    <a href={url} className={twMerge(buttonStyles({ variant: "nobackground" }), `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined}`)}>
      {typeof IconOrImgUrl === "string" ? <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" alt="image" /> : <IconOrImgUrl className="w-6 h-6" />}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
    </a>
  );
}
