import { FiHome, FiBook } from "react-icons/fi";
import { TbMushroom } from "react-icons/tb";
import { GiPill } from "react-icons/gi";
import { BiNews } from "react-icons/bi";
import { IconType } from "react-icons";
import { FcPlanner } from "react-icons/fc";

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}
// Active options in side bar
export const LinkItems: Array<LinkItemProps> = [
  { name: "Plan your Trip", icon: FcPlanner, link: "/library/plan-your-trip" },
  { name: "Psychedelics", icon: TbMushroom, link: "/library/home" },
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
];

// coming soon items interface
interface ComingSoonTypes {
  name: string;
  icon: IconType;
}
// Coming soon options in side bar
export const ComingSoonItems: Array<ComingSoonTypes> = [
  {
    name: "Newsletters",
    icon: FiHome,
  },
  {
    name: "Newsletters",
    icon: FiHome,
  },
  {
    name: "Newsletters",
    icon: FiHome,
  },
  {
    name: "Newsletters",
    icon: FiHome,
  },
];
