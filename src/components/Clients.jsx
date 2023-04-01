import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} w-full flex-wrap`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} min-w-[120px] py-4 sm:min-w-[192px] md:py-0`}
        >
          <img
            src={client.logo}
            alt="client"
            className="w-[100px] object-contain sm:w-[192px]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
