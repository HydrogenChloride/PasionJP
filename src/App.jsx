import styles from './style';
import { Navbar, Hero, About, Skills, Projects, Services, Testimonials, Contact, Footer } from './components';

const App = () => (
  
  <div className="bg-primary w-full overflow-hidden">
    <div className="fixed w-full z-[20]">
      <Navbar />
    </div>
        
      

    <div className={`bg-primary ${styles.flexStart} m-5`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Skills />
        <Projects />
        <Services />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App