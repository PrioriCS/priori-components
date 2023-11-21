import React, { useState, useContext, Fragment } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import { isUndefined } from 'lodash';

const DropDownContext = React.createContext();

const Dropdown = ({ className = '', children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className={`relative ${className}`}>{children}</div>
    </DropDownContext.Provider>
  );
};

const Trigger = ({ children, onClick }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);

  const handleClick = () => {
    setOpen(false);
    if (!isUndefined(onClick)) {
      onClick();
    }
  };

  const handleToggleOpen = () => {
    toggleOpen();
    if (!isUndefined(onClick)) {
      onClick();
    }
  };

  return (
    <>
      <div onClick={handleToggleOpen}>{children}</div>

      {open && <div className='fixed inset-0 z-50' onClick={handleClick}></div>}
    </>
  );
};

// TODO review: "9" is a magic number
const Content = ({
  align = 'top',
  width = '48',
  radius = 'rounded-md',
  contentClasses = 'bg-white',
  position = 'absolute left-60',
  shadow = '',
  children,
}) => {
  const { open } = useContext(DropDownContext);

  let alignmentClasses = 'origin-top inset-auto';

  if (align === 'left') {
    alignmentClasses = 'origin-top-left left-0';
  } else if (align === 'right') {
    alignmentClasses = 'origin-top-right right-0';
  } else if (align === 'bottom') {
    alignmentClasses = 'origin-bottom bottom-9';
  } else if (align === 'side') {
    alignmentClasses = 'origin-bottom bottom-0';
  }

  let widthClasses = '';

  if (width === '48') {
    widthClasses = 'w-48';
  } else {
    widthClasses = width;
  }

  let positionClasses = '';

  if (position === 'absolute') {
    positionClasses = 'absolute';
  } else if (position === 'fixed') {
    positionClasses = 'fixed';
  } else {
    positionClasses = position;
  }

  return (
    <>
      <Transition
        as={Fragment}
        show={open}
        enter='transition ease-out duration-200'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <div
          className={`${positionClasses} ${open ? shadow : ''} z-50 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}>
          <div className={`${radius} max-h-56 overflow-x-auto ring-1 ring-black ring-opacity-5 ` + contentClasses}>
            {children}
          </div>
        </div>
      </Transition>
    </>
  );
};

const DropdownLink = ({ href, method = 'post', as = 'a', children, noRadius = false }) => {
  return (
    <Link
      href={href}
      method={method}
      as={as}
      className={`block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${
        noRadius ? 'rounded-none' : 'rounded-md'
      }`}>
      {children}
    </Link>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;

export default Dropdown;
