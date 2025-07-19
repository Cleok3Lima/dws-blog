import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import type { Option, DropdownComponentProps } from './types';
import styles from './styles.module.scss';

export const DropdownComponent = ({
  options,
  placeholder,
  onSelect,
}: DropdownComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleSelect = (option: Option) => {
    setSelectedLabel(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <div
        className={`${styles.control} ${isOpen ? styles.open : ''}`}
        onClick={handleToggle}
      >
        <span>{selectedLabel || placeholder}</span>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={styles.icon}
        />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          {options.map(option => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
