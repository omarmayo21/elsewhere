import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
};

export const Cart = () => {
  return (
    <>
      <SEO title="Shopping Cart — elsewhere" />
      
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center py-32 px-site-gutter-mobile md:px-site-gutter mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-8">Shopping Cart</h2>
          <p className="text-lg text-[#666] tracking-wide mb-8">
            You have nothing in your shopping cart.
          </p>
          <a href="/" className="bg-black text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-gray-800 transition-colors inline-block">
            Continue Shopping
          </a>
        </motion.div>
      </div>
    </>
  );
};
