import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import '../styles/CartDrawer.css';

export default function CartDrawer() {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsCartOpen(false)}
          />

          <motion.div
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          >
            <div className="cart-header">
              <h2 className="cart-title">Your Cart {totalItems > 0 && <span className="cart-count-inline">({totalItems})</span>}</h2>
              <button className="cart-close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
            </div>

            <div className="cart-body">
              {cartItems.length === 0 ? (
                <div className="cart-empty">
                  <span className="cart-empty-icon">🛒</span>
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                <ul className="cart-items-list">
                  {cartItems.map(item => (
                    <motion.li
                      key={item.id}
                      className="cart-item"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      layout
                    >
                      <div className="cart-item-image-wrap" style={{ backgroundColor: item.tileBg }}>
                        <img src={item.image} alt={item.name} className="cart-item-img" />
                      </div>

                      <div className="cart-item-info">
                        <p className="cart-item-name">{item.name}</p>
                        <p className="cart-item-price">{item.price}</p>

                        <div className="cart-item-qty">
                          <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                      </div>

                      <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total-row">
                  <span>Total</span>
                  <span className="cart-total-price">${totalPrice.toFixed(2)}</span>
                </div>
                <motion.button
                  className="cart-checkout-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
