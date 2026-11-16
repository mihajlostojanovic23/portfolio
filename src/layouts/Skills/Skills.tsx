import { SwiperComponent } from "@/components/Swiper/Swiper"
import SkillCard from "@/components/SkillCard/SkillCard"
import skillsList from "@/mock/experiences"

const Skills = () => (
  <SwiperComponent
    items={skillsList}
    getItemKey={(skill) => skill.id}
    renderItem={(skill) => <SkillCard {...skill} />}
  />
)

export default Skills
