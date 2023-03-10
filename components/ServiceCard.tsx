import { FunctionComponent } from "react";
import { Service } from "../types";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, title, about },
}) => {
  //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
  function createMarkup() {
    return {
      __html: about,
    };
  }

  return (
    <motion.div
      className="flex items-center p-2 space-x-4 h-48 leading-loose"
     
    >
      <Icon className="w-12 h-12 text-green-500" />
      <div className="">
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
