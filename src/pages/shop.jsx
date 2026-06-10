import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import '../styles/shop.css';

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div className="product-card" variants={cardVariants} whileHover={{ y: -8 }}>
      <Link to={`/product/${product.id}`}>
        <motion.div
          className="product-image-wrapper"
          style={{ backgroundColor: product.tileBg }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="product-image"
            whileHover={{ scale: 1.08, rotate: -4 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </motion.div>
      </Link>

      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>

        <div className="product-actions-group">
          <motion.button
            className="btn-buy-now"
            style={{ backgroundColor: product.tileBg }}
            whileTap={{ scale: 0.94 }}
            onClick={handleAddToCart}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={added ? 'added' : 'buy'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                {added ? 'Added!' : 'Add to Cart'}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <Link to={`/product/${product.id}`} style={{ flex: 1 }}>
            <motion.button
              className="btn-view-details"
              style={{ backgroundColor: product.tileBg, width: '100%' }}
              whileTap={{ scale: 0.94 }}
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Shop() {
  return (
    <div className="shop-page" id="shop-section">
      <main className="shop-content">
        <motion.div
          className="shop-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="shop-title">available shoes</h1>
          <p className="shop-subtitle">Pick your favorite pair.</p>
        </motion.div>

        <motion.div
          className="product-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </main>
    </div>
  );
}
