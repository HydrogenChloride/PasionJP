import styles from "../style";
import ServicesCard from './ServicesCard';

const Services = () => (
  <section id="services" className={ `${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <h1 className="font-poppins font-semibold text-white text-[48px] justify-center">
          Services
      </h1>

      <ServicesCard />
    </section>
)

export default Services