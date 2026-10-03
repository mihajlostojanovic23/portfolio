import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import style from "./Experience.module.css"
import experiencesList from "./experience.contants";

const Experience = () => {
  return <div className={style.experience}>
    {experiencesList.map((experience, index) => (
      <ExperienceCard key={index} {...experience} />
    ))}
     </div>;
};

export default Experience;
