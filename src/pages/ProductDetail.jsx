import { useState } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import '../styles/ProductDetail.css';

const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12];

const sizeVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const sizeItem = {
  hidden: { opacity: 0, scale: 0.7 },
  show:   { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);

  if (!product) return <Navigate to="/shop" replace />;

  const related = products.filter(p => p.id !== product.id);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="detail-page">
      <Navbar />

      {/* ── HERO SPLIT ── */}
      <section className="detail-hero">

        {/* LEFT — colored image panel */}
        <motion.div
          className="detail-image-panel"
          style={{ backgroundColor: product.tileBg }}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="detail-bg-text">{product.name.split("'")[1] ?? 'NIKE'}</div>

          <motion.img
            src={product.image}
            alt={product.name}
            className="detail-shoe-img"
            initial={{ opacity: 0, scale: 0.75, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06, rotate: -3 }}
          />
        </motion.div>

        {/* RIGHT — product info */}
        <motion.div
          className="detail-info-panel"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            className="detail-back-btn"
            onClick={() => navigate(-1)}
            whileHover={{ x: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            ← Back
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="detail-brand">NIKE</span>
            <h1 className="detail-name">{product.name}</h1>
            <p className="detail-price">{product.price}</p>
            <p className="detail-desc">{product.description}</p>

            {/* Feature tags */}
            <div className="detail-features">
              {product.features.map(f => (
                <span key={f} className="detail-feature-tag" style={{ backgroundColor: product.tileBg, color: product.buttonColor }}>
                  {f}
                </span>
              ))}
            </div>

            {/* Size selector */}
            <div className="detail-sizes">
              <p className="detail-sizes-label">
                SELECT SIZE
                {selectedSize && <span className="detail-size-chosen"> — US {selectedSize}</span>}
              </p>

              <motion.div
                className="detail-sizes-grid"
                variants={sizeVariants}
                initial="hidden"
                animate="show"
              >
                {sizes.map(size => (
                  <motion.button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'size-btn--active' : ''}`}
                    style={selectedSize === size ? { backgroundColor: product.tileBg, borderColor: product.buttonColor, color: product.buttonColor } : {}}
                    variants={sizeItem}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* CTA buttons */}
            <div className="detail-cta-row">
              <motion.button
                className="detail-add-btn"
                style={{ backgroundColor: product.tileBg, color: product.buttonColor }}
                onClick={handleAdd}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={added ? 'added' : 'add'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                  >
                    {added ? '✓ Added to Cart!' : 'Add to Cart'}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              <motion.button
                className="detail-wishlist-btn"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                ♡
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section className="related-section">
        <motion.h2
          className="related-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          You might also like
        </motion.h2>

        <div className="related-grid">
          {related.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/product/${p.id}`} className="related-card">
                <motion.div
                  className="related-img-wrap"
                  style={{ backgroundColor: p.tileBg }}
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <p className="related-name">{p.name}</p>
                <p className="related-price">{p.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
