import Navbar from '../components/Navbar';
import Shop from './shop';
import '../styles/ShopPage.css';

export default function ShopPage() {
  return (
    <div className="shop-page-wrapper">
      <Navbar />
      <Shop />
    </div>
  );
}
