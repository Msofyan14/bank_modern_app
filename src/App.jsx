import React from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonial,
} from "./components";
import styles from "./style";

const App = () => (
  <>
    <div className="w-full overflow-hidden bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Hero />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexStart} overflow-hidden`}
    >
      <div className={`${styles.boxWidth} `}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonial />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </>
);

export default App;
