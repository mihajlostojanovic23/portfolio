// Import images for the experience icons
import smarttvIcon from "@/assets/icons/smart-tv.png";
import ottIcon from "@/assets/icons/ott-cloud.png";
import playbackIcon from "@/assets/icons/playback.png";
import performanceIcon from "@/assets/icons/performance.png";
import lightningjsIcon from "@/assets/icons/lightningjs.png";
import reactIcon from "@/assets/icons/react.png";
import typescriptIcon from "@/assets/icons/typescript.png";

type Experience = {
  title: string;
  description: string;
  icon: string;
};

const experiencesList = [
  {
    title: "Smart TV Apps",
    description:
      "Native TV experiences for LG, Samsung, Android TV and custom platforms.",
    icon: smarttvIcon,
  },
  {
    title: "OTT Platforms",
    description:
      "End-to-end streaming applications and content discovery experiences.",
    icon: ottIcon,
  },
  {
    title: "Playback & Streaming UI",
    description:
      "Modern player interfaces, EPG, live TV, catch-up and VOD experiences.",
    icon: playbackIcon,
  },
  {
    title: "Performance Optimization",
    description:
      "Smooth, responsive and memory-efficient applications for every device.",
    icon: performanceIcon,
  },
  {
    title: "LightningJS",
    description: "High-performance TV apps with LightningJS.",
    icon: lightningjsIcon,
  },
  {
    title: "React",
    description: "Modern, component-based user interfaces.",
    icon: reactIcon,
  },
  {
    title: "TypeScript",
    description: "Type-safe, scalable applications.",
    icon: typescriptIcon,
  },
] satisfies Experience[];

export default experiencesList;
export type { Experience };
