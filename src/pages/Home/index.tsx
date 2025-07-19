import { useEffect, useState } from 'react';
import { PostCard } from '../../components/PostCard';
import { Filters } from '../../components/Filters';
import { type Post, type Author, type Category } from './types';
import styles from './styles.module.scss';

export const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filters, setFilters] = useState({ authorId: '', categoryId: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('https://tech-test-backend.dwsbrazil.io/posts').then(res =>
        res.json(),
      ),
      fetch('https://tech-test-backend.dwsbrazil.io/authors').then(res =>
        res.json(),
      ),
      fetch('https://tech-test-backend.dwsbrazil.io/categories').then(res =>
        res.json(),
      ),
    ])
      .then(([posts, authors, categories]) => {
        setPosts(posts);
        setAuthors(authors);
        setCategories(categories);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar dados', err);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (newFilters: {
    authorId: string;
    categoryId: string;
  }) => {
    setFilters(newFilters);
  };

  const filteredPosts = posts.filter(post => {
    const byAuthor = filters.authorId
      ? post.author.id === filters.authorId
      : true;
    const byCategory = filters.categoryId
      ? post.categories.some(cat => cat.id === filters.categoryId)
      : true;
    return byAuthor && byCategory;
  });

  if (loading) return <div>Carregando...</div>;

  return (
    <div className={styles.container}>
      <Filters
        authors={authors}
        categories={categories}
        onFilterChange={handleFilterChange}
        filters={filters}
      />
      <div className={styles.grid}>
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
