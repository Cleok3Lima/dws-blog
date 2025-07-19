import type { Author, Category } from '../../../pages/Home/types';

export type SidebarFilterProps = {
  authors: Author[];
  categories: Category[];
  onFilterChange: (filters: { authorId: string; categoryId: string }) => void;
  selectedFilters: { authorId: string; categoryId: string };
};
