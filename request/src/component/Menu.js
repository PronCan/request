import React, { useState } from 'react';
import '../css/menu.scss';

const Menu = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-menu">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`menu-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleItemClick(index)}
        >
          <div className="menu-title">{item.title}</div>
          {activeIndex === index && <div className="menu-content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Menu;
