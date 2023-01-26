import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimate, stagger } from "../animations";

const About: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimate}
      animate="animate"
      initial="initial"
    >
      <h6 className="my-3 text-base font-medium">
        I&apos;m a Front end developer, I can design any website, complicated
        designs, dynamic templates, and responsive to modern technology. I
        strive to develop myself daily. I have a passion for being at the
        mastery level of Frontend Development.
      </h6>
      <motion.div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <motion.div
          className="grid gap-6 my-9 md:grid-cols-1 lg:grid-cols-2 "
          variants={fadeInUp}
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.id}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
