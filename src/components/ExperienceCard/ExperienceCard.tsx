import type { Experience } from "@/layouts/Experience/experience.contants";
import style from "./ExperienceCard.module.css"

const ExperienceCard = (props: Experience) => {
    return (
        <div className={style.card}>
           <img className={style.cardImage} src={props.icon} alt={props.title} />
           <div className={style.cardContent}>
            <h3 className={style.cardTitle}>{props.title}</h3>
            <p className={style.cardDescription}>{props.description}</p>
           </div>
        </div>
    );
}

export default ExperienceCard;