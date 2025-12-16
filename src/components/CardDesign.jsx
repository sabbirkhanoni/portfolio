import { motion } from "framer-motion";

const CardDesign = ({ text }) => {
  return (
    <motion.div
      className="px-4 py-2 text-sm flex items-center justify-center
                 rounded-full bg-[#050f2c] text-white w-32 h-10
                 cursor-grab select-none
                 shadow-lg shadow-aqua/20
                 hover:shadow-aqua/50"
      whileHover={{ scale: 1.1 }}
      drag
      dragElastic={0.2}
    >
      {text}
    </motion.div>
  );
};

export default CardDesign;
