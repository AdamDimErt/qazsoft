/** @format */

import React, { useState } from "react";
import "./dropdownmenu.scss";
import { Link } from "react-router-dom";
import { Paths } from "Paths";

export interface MenuItem {
  label: string;
  value: string;
  link: string;
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  items,
}) => {
  console.log(items);

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
    <div className='main-dropdown'>
      {isMenuOpen && <div className='border'></div>}
      <div className={`dropdown-menu`}>
        <div
          className='dropdown-title'
          onClick={handleToggleMenu}
        >
          {title}
          {isMenuOpen ? (
            <svg
              width='15'
              height='8'
              viewBox='0 0 15 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='arrowDown'
            >
              <path
                d='M1 1L6.69842 5.88436C7.4474 6.52634 8.5526 6.52634 9.30158 5.88436L15 1'
                stroke='#7694FF'
                stroke-width='2'
              />
            </svg>
          ) : (
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
                <Link
                  className={`dropdown-item ${
                    selectedItem === item.value
                      ? "selected"
                      : ""
                  }`}
                  to={item.link}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
