import { feedback } from "../constants"
import styles from "../style";
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
    <section id="clients" className={ `${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      <h1 className="flex items-center justify-center font-poppins font-semibold text-white text-[48px]">
          Testimonials
      </h1>

      <div className="flex flex-wrap justify-center sm:justify-start justify-center feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id}  {...card} />
        ))}
      </div>
    </section>
)

export default Testimonials