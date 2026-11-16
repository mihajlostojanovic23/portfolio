import { type Skill } from "@/mock/experiences";
import style from "./SkillCard.module.css"

const SkillCard = (props: Skill) => {
    const { title, description, icon } = props;
    return (
        <div className={style.card}>
           <img className={style.cardImage} src={icon} alt={title} />
           <div className={style.cardContent}>
            <h3 className={style.cardTitle}>{title}</h3>
            <p className={style.cardDescription}>{description}</p>
           </div>
        </div>
    );
}

export default SkillCard;