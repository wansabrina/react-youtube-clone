import { Clapperboard, Clock, Home, Library, PlaySquare, Repeat, History, ListVideo, Flame, ShoppingBag, Music2, Film, Radio, Gamepad2, Newspaper, Trophy, Lightbulb, Shirt, Podcast } from "lucide-react";

export const subscriptions = [
  {
    channelName: "BuzzFeed",
    id: "buzzfeed",
    imgUrl:
      "https://logos-world.net/wp-content/uploads/2022/01/Seventeen-Logo.png",
  },
]

export const playlists = [
  { id: "1", name: "Playlist 1" },
  { id: "2", name: "Playlist 2" },
  { id: "3", name: "Playlist 3" },
]

export const sidebarData = [
  { Icon: Home, title: "Home", url: "/" },
  { Icon: Repeat, title: "Shorts", url: "/shorts" },
  { Icon: Clapperboard, title: "Subscriptions", url: "/subscriptions" },
  { Icon: Library, title: "Library", url: "/library" },
];

export const visibleItemsData = [
  { IconOrImgUrl: Library, title: "Library", url: "/library" },
  { IconOrImgUrl: History, title: "History", url: "/history" },
  { IconOrImgUrl: PlaySquare, title: "Your Videos", url: "/your-videos" },
];

export const exploreData = [
  { IconOrImgUrl: Flame, title: "Trending", url: "/trending" },
  { IconOrImgUrl: ShoppingBag, title: "Shopping", url: "/shopping" },
  { IconOrImgUrl: Music2, title: "Music", url: "/music" },
  { IconOrImgUrl: Film, title: "Movies & TV", url: "/movies-tv" },
  { IconOrImgUrl: Radio, title: "Live", url: "/live" },
  { IconOrImgUrl: Gamepad2, title: "Gaming", url: "/gaming" },
  { IconOrImgUrl: Newspaper, title: "News", url: "/news" },
  { IconOrImgUrl: Trophy, title: "Sports", url: "/sports" },
  { IconOrImgUrl: Lightbulb, title: "Learning", url: "/learning" },
  { IconOrImgUrl: Shirt, title: "Fashion & Beauty", url: "/fashion-beauty" },
  { IconOrImgUrl: Podcast, title: "Podcasts", url: "/podcasts" },
];
