// Import images for the experience icons
import smarttvIcon from "@/assets/icons/smart-tv.png";
import ottIcon from "@/assets/icons/ott-cloud.png";
import playbackIcon from "@/assets/icons/playback.png";
import performanceIcon from "@/assets/icons/performance.png";
import lightningjsIcon from "@/assets/icons/lightningjs.png";
import reactIcon from "@/assets/icons/react.png";
import typescriptIcon from "@/assets/icons/typescript.png";

type Skill = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const skillsList = [
  {
    id: 1,
    title: "Smart TV Apps",
    description:
      "Native TV experiences for LG, Samsung, Android TV and custom platforms.",
    icon: smarttvIcon,
  },
  {
    id: 2,
    title: "OTT Platforms",
    description:
      "End-to-end streaming applications and content discovery experiences.",
    icon: ottIcon,
  },
  {
    id: 3,
    title: "Playback & Streaming UI",
    description:
      "Modern player interfaces, EPG, live TV, catch-up and VOD experiences.",
    icon: playbackIcon,
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Smooth, responsive and memory-efficient applications for every device.",
    icon: performanceIcon,
  },
  {
    id: 5,
    title: "LightningJS",
    description: "High-performance TV apps with LightningJS.",
    icon: lightningjsIcon,
  },
  {
    id: 6,
    title: "React",
    description: "Modern, component-based user interfaces.",
    icon: reactIcon,
  },
  {
    id: 7,
    title: "TypeScript",
    description: "Type-safe, scalable applications.",
    icon: typescriptIcon,
  },
] satisfies Skill[];

export default skillsList;
export type { Skill };
