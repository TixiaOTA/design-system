import { motion } from "framer-motion";

export const Loading = ({ img = "/TixiaWhite.svg" }) => {
  return (
    <div className="top-0 left-0 items-center justify-center h-[60vh] w-[34vh] flex flex-col gap-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div
          initial={{ opacity: 0.5, scale: 0 }}
          animate={{ opacity: 1, scale: 50 }}
          transition={{ duration: 2 }}
          className="w-10 h-10 bg-primary rounded-full z-5"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: [0, 0.5, 1, 0],
            y: [-50, -50, 0, 0],
            rotate: [0, 0, 0, 360],
            scale: [1, 1, 1, 20],
          }}
          transition={{
            duration: 4.5,
            times: [0, 0.3, 0.7, 1],
            ease: "easeInOut",
          }}
          className="opacity-1 z-10"
        >
          <img src={img} alt="Tixia Blue" className="w-fit h-fit" />
        </motion.div>
      </motion.div>
    </div>
  );
};
