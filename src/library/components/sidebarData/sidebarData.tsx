import { FiBook } from "react-icons/fi";
import { TbMushroom } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";

import { GiPill } from "react-icons/gi";
import { BiNews, BiMoviePlay } from "react-icons/bi";
import { IconType } from "react-icons";
import { FcPlanner } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}
// Active options in side bar
export const LinkItems: Array<LinkItemProps> = [
  { name: "Psychedelics", icon: TbMushroom, link: "/library/home" },
  { name: "Plan your Trip", icon: FcPlanner, link: "/library/plan-your-trip" },
  {
    name: "Beginner's guide",
    icon: FiBook,
    link: "/library/beginners-guide",
  },
  { name: "Microdosing", icon: GiPill, link: "/library/microdosing" },
  {
    name: "Latest News",
    icon: BiNews,
    link: "/library/latest-news",
  },
  {
    name: "Best Newsletters",
    icon: AiOutlineMail,
    link: "/library/newsletter-collection",
  },
];

// coming soon items interface
interface ComingSoonTypes {
  name: string;
  icon: IconType;
}
// Coming soon options in side bar
export const ComingSoonItems: Array<ComingSoonTypes> = [
  {
    name: "Top Playlist",
    icon: BsMusicNoteBeamed,
  },
  {
    name: "Top Movies",
    icon: BiMoviePlay,
  },
  {
    name: "Best Books",
    icon: TbReportAnalytics,
  },
  {
    name: "Top Psychonauts",
    icon: TbReportAnalytics,
  },
];
