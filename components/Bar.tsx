import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { Skill } from "../types";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <motion.div
        variants={variants}
        animate="animate"
        initial="initial"
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500 "
        style={{
          width: bar_width,
        }}
      >
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};
export default Bar;
