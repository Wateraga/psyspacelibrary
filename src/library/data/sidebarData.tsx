import { FiHome, FiTrendingUp } from "react-icons/fi";
import { IconType } from "react-icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}
export const LinkItems: Array<LinkItemProps> = [
  { name: "Psychedelics", icon: FiHome, link: "/library/home" },
  {
    name: "Beginner's guide",
    icon: FiTrendingUp,
    link: "/library/beginners-guide",
  },
  { name: "Microdosing", icon: FiTrendingUp, link: "/library/microdosing" },
  {
    name: "Latest News",
    icon: FiTrendingUp,
    link: "/library/trendinglatest-news",
  },
];
