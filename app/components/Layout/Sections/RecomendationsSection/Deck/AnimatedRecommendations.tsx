import styles from '../Recomendations.module.scss'
import { CardDeck } from './CardDeck';

export type RecommendationsType = {
  name: string
  occupation: string
  profilePic: string
  recommendation: string
}

export const RECOMMENDATIONS: RecommendationsType[] = [
  {
      name: "Diego Magalhães",
      occupation: "Front-end Developer | ReactJS | TypeScript |Next.JS",
      profilePic: '/assets/recommendations/diego.jpeg',
      recommendation: "Matheus is a young professional with a lot of experience in front-end development, whose talent and dedication have stood out throughout my journey. With a solid command of current technologies and a remarkable ability to solve complex challenges creatively, he is a true asset to any team. In addition to his technical proficiency, Matheus has great communication skills and a continuous commitment to learning and adaptation, traits that make him exceptionally valuable in dynamic and innovative environments. I have total confidence in his ability to exceed expectations and contribute significantly to future projects."
  },
  {
      name: "Érico Cavalcanti",
      occupation: "Desenvolvedor Java Backend Pleno at @Petz | Java | Typescript | Spring Boot | AWS | Microsservices",
      profilePic: '/assets/recommendations/erico.jpeg',
      recommendation: "Matheus is someone who spares no effort to acquire new knowledge, always ready to adapt to the work environment and contribute in the best possible way. He presents an exponential and remarkable learning curve, a great developer!"
  },
  {
      name: "Simone Gomes",
      occupation: "Gestão Estratégica de Recursos Humanos | Desenvolvimento Organizacional | Especialista em Análise Comportamental | Business Partner | Mentoria",
      profilePic: '/assets/recommendations/simone.jpeg',
      recommendation: "A young professional with a lot of experience. Dedicated, proactive, and highly qualified in the necessary competencies for his role. Always willing to help colleagues, he does his work with ethics and collaboration. He is definitely a professional that I would like to have on the team again."
  },
  {
      name: "Gustavo Ulyssea",
      occupation: "Adobe Certified Senior Magento Developer",
      profilePic: '/assets/recommendations/gustavo.jpeg',
      recommendation: "A young professional with very advanced knowledge in the technologies he works with. He helps everyone, has a great sense of humor, and makes the work environment light."
  },
  {
      name: "Ericka Rolim",
      occupation: "Product/Project Manager -Open Banking/Open Finance/Open Insurance/RegTech - at Itaú by Zup Innovation",
      profilePic: '/assets/recommendations/ericka.jpeg',
      recommendation: "Matheus is an excellent professional; attentive, attentive to the quality of deliveries, and excellent with all colleagues! I highly recommend him."
  },
  {
      name: "Adriana A. Pereira 🧡💙💚",
      occupation: "Customer Success at Businessmap Brasil",
      profilePic: '/assets/recommendations/adriana.jpeg',
      recommendation: "Matheus is a young man, extremely committed to results and customer focus. He is proactive, correct, and cares about always doing the right thing. Always willing to help, and noticeable is his willingness to grow. He is engaged in all projects he participates in, with a high level of perception of long-term needs. Matheus is friendly, cheerful, and communicative, so everyone around him is pleased to have him on the team."
  },
  {
    name: "Luana Sasaki",
    occupation: "Social Media | Marketing | Fundação Getúlio Vargas",
    profilePic: '/assets/recommendations/luana.jpeg',
    recommendation: "Matheus is a dedicated and very talented programmer, despite being very young. His passion and commitment in the projects he works on are evident. He deals with problems with innovative solutions and is always expanding his knowledge and skills in programming. Matheus is the type of professional who raises the standard of any project he commits to."
},
]

export const AnimatedRecommendations = () => {
  return (
    <div className={styles.recommendationGroup}>
      {RECOMMENDATIONS.map((item, index) => (
        <CardDeck item={item} key={index} />
      ))}
    </div>
  )
}