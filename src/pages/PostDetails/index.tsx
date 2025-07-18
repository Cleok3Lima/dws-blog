import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PostCard } from '../../components/PostCard';
import { formatDate } from '../../utils/formatDate';
import { splitName } from '../../utils/splitName';
import styles from './styles.module.scss';
import { type Post } from '../Home/types';

export const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://tech-test-backend.dwsbrazil.io/posts')
      .then(res => res.json())
      .then(data => {
        const foundPost = data.find((p: Post) => p.id === id);
        setPost(foundPost);
        setLatestPosts(data.filter((p: Post) => p.id !== id).slice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar post', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (!post) return <div>Post não encontrado.</div>;

  const { title, content, createdAt, author, thumbnail_url } = post;
  const { firstName } = splitName(author.name);

  return (
    <div className={styles.container}>
      <button
        className={styles.backButton}
        onClick={() => window.history.back()}
      >
        ← Back
      </button>
      <div>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.authorRow}>
          <img
            src={author.profilePicture}
            alt={author.name}
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <span>
              Written by: <strong>{firstName}</strong>
            </span>
            <span className={styles.authorInfoDate}>
              {formatDate(createdAt)}
            </span>
          </div>
        </div>

        <img src={thumbnail_url} alt={title} className={styles.thumbnail} />

        <div className={styles.content}>{content}</div>

        <hr className={styles.divider} />

        <h2 className={styles.latestTitle}>Latest articles</h2>
        <div className={styles.latestGrid}>
          {latestPosts.map(p => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
};
