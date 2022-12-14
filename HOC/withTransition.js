import { motion } from "framer-motion";

const withTransition = (OriginalComponent) => {
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: .8, ease: "easeInOut" }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, originY: -100}}
        exit={{ scaleY: 0, originY: -100 }}
        transition={{ duration: .8, ease: "easeInOut" }}
      />
    </>
  );
};

export default withTransition;