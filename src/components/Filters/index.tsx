import { useEffect, useState } from 'react';
import { DropdownFilter } from './DropdownFilter/DropdownFilter';
import { SidebarFilter } from './SidebarFilter/SidebarFilter';
import { type Author, type Category } from '../../pages/Home/types';

type FiltersProps = {
  authors: Author[];
  categories: Category[];
  onFilterChange: (filters: { authorId: string; categoryId: string }) => void;
  filters: { authorId: string; categoryId: string };
};

export const Filters = ({
  authors,
  categories,
  onFilterChange,
  filters,
}: FiltersProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? (
    <DropdownFilter
      authors={authors}
      categories={categories}
      onFilterChange={onFilterChange}
    />
  ) : (
    <SidebarFilter
      authors={authors}
      categories={categories}
      onFilterChange={onFilterChange}
      selectedFilters={filters}
    />
  );
};
