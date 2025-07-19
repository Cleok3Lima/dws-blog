import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import type { SidebarFilterProps } from './types';
import styles from './styles.module.scss';

export const SidebarFilter = ({
  authors,
  categories,
  onFilterChange,
  selectedFilters,
}: SidebarFilterProps) => {
  const [localAuthor, setLocalAuthor] = useState<string>(
    selectedFilters.authorId,
  );
  const [localCategory, setLocalCategory] = useState<string>(
    selectedFilters.categoryId,
  );

  useEffect(() => {
    setLocalAuthor(selectedFilters.authorId);
    setLocalCategory(selectedFilters.categoryId);
  }, [selectedFilters]);

  const handleAuthorClick = (id: string) => {
    setLocalAuthor(prev => (prev === id ? '' : id));
  };

  const handleCategoryClick = (id: string) => {
    setLocalCategory(prev => (prev === id ? '' : id));
  };

  const applyFilters = () => {
    onFilterChange({
      authorId: localAuthor,
      categoryId: localCategory,
    });
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <h3>
          <FontAwesomeIcon icon={faSliders} /> Filters
        </h3>

        <h4>Category</h4>
        <ul>
          {categories.map(category => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={category.id === localCategory ? styles.active : ''}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Author</h4>
        <ul>
          {authors.map(author => (
            <li
              key={author.id}
              onClick={() => handleAuthorClick(author.id)}
              className={author.id === localAuthor ? styles.active : ''}
            >
              {author.name}
            </li>
          ))}
        </ul>
      </div>

      <button
        type='button'
        onClick={applyFilters}
        className={styles.applyButton}
      >
        Apply filters
      </button>
    </div>
  );
};
