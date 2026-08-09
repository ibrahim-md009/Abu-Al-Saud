import { motion } from "framer-motion";

const SheetAnimation = ({ id, className, children, ...props }) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      id={id}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SheetAnimation;
