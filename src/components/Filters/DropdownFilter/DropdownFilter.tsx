import { useState } from 'react';
import { DropdownComponent } from '../../DropdownComponent/DropdownComponent';
import type { DropdownFilterProps } from './types';
import styles from './styles.module.scss';

export const DropdownFilter = ({
  authors,
  categories,
  onFilterChange,
}: DropdownFilterProps) => {
  const [selectedAuthor, setSelectedAuthor] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const authorOptions = [
    { label: 'Todos os autores', value: '' },
    ...authors.map(a => ({ label: a.name, value: a.id })),
  ];

  const categoryOptions = [
    { label: 'Todas as categorias', value: '' },
    ...categories.map(c => ({ label: c.name, value: c.id })),
  ];

  const handleAuthorSelect = (value: string) => {
    const authorId = selectedAuthor === value ? '' : value;
    setSelectedAuthor(authorId);
    onFilterChange({ authorId, categoryId: selectedCategory });
  };

  const handleCategorySelect = (value: string) => {
    const categoryId = selectedCategory === value ? '' : value;
    setSelectedCategory(categoryId);
    onFilterChange({ authorId: selectedAuthor, categoryId });
  };

  return (
    <div className={styles.container}>
      <DropdownComponent
        options={authorOptions}
        placeholder='Todos os autores'
        onSelect={handleAuthorSelect}
      />

      <DropdownComponent
        options={categoryOptions}
        placeholder='Todas as categorias'
        onSelect={handleCategorySelect}
      />
    </div>
  );
};
