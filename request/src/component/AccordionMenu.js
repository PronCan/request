import React, { useState } from 'react';
import '../css/menu.scss';

const AccordionMenu = () => {
  const menuItems = [
    { id: 1, title: '대메뉴',
      content: [
        { id: 1, title: '소메뉴1' },
        { id: 2, title: '소메뉴2' }
      ] },
      { id: 2, title: '대메뉴',
      content: [
        { id: 1, title: '소메뉴1' },
        { id: 2, title: '소메뉴2' }
      ] },
  ];

  const [activeItems, setActiveItems] = useState([]);

  const handleItemClick = (itemId, isSubMenu = false) => {
    if(isSubMenu) {
      return;
    }
    setActiveItems((prevActiveItems) =>
      prevActiveItems.includes(itemId)
        ? prevActiveItems.filter((item) => item !== itemId)
        : [...prevActiveItems, itemId]
    );
  };

  const handleSubItemClick = (e) => {
    // 소메뉴 클릭 이벤트 처리
    e.stopPropagation();
    console.log('소메뉴 클릭:', e.target.innerText);
  };

  return (
    <div className="accordion-menu">
      {menuItems.map(({ id, title, content }) => (
        <div
          key={id}
          className={`menu-item ${activeItems.includes(id) ? 'active' : ''}`}
          onClick={() => handleItemClick(id)}
        >
          <div className="menu-title">{title}</div>
            <div className="menu-content">
              {content && (
                <ul className="sub-menu">
                  {content.map(({ id, title }) => (
                    <li className='active' key={id} onClick={handleSubItemClick}>
                      {title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;
