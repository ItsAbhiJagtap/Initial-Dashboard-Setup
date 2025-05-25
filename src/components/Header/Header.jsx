// Header.jsx
import './Header.css';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => (
  <header className="header">
    <div className="search-container">
      <Search className="icon" size={18} />
      <input type="text" placeholder="Search" className="search-input" />
    </div>
    <div className="header-right">
      <Bell className="icon violet-icon" size={20} />
      <div className="user-avatar" />
    </div>
  </header>
);

export default Header;
