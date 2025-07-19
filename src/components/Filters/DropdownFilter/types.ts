import type { Author, Category } from '../../../pages/Home/types';

export type DropdownFilterProps = {
  authors: Author[];
  categories: Category[];
  onFilterChange: (filters: { authorId: string; categoryId: string }) => void;
};
