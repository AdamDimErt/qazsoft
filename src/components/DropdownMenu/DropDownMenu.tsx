/** @format */

import React, { useState } from "react";
import "./dropdownmenu.scss";

interface MenuItem {
  label: string;
  value: string;
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  items,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    string | null
  >(null);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSelectItem = (value: string) => {
    setSelectedItem(value);
  };

  return (
    <div className='dropdown-menu'>
      <div
        className='dropdown-title'
        onClick={handleToggleMenu}
      >
        {title}
        {isMenuOpen ? (
          <svg
            width='8'
            height='16'
            viewBox='0 0 8 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 15L5.88436 9.30158C6.52634 8.5526 6.52634 7.4474 5.88436 6.69842L1 1'
              stroke='#2A2A28'
              stroke-width='2'
            />
          </svg>
        ) : (
          <svg
            width='7'
            height='16'
            viewBox='0 0 7 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            transform='rotate(180)'
          >
            <path
              d='M6 1L1.11564 6.69842C0.473659 7.4474 0.473659 8.5526 1.11564 9.30158L6 15'
              stroke='#2A2A28'
              stroke-width='2'
            />
          </svg>
        )}
      </div>

      {isMenuOpen && (
        <ul className='dropdown-list'>
          {items.map((item) => (
            <li
              key={item.value}
              className={`dropdown-item ${
                selectedItem === item.value
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleSelectItem(item.value)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
