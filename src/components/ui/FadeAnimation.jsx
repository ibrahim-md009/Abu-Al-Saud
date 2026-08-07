import { motion } from "framer-motion";

const FadeAnimation = ({ id, className, children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      id={id}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
