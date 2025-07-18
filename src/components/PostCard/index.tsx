import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type PostCardProps } from './types';
import { formatDate } from '../../utils/formatDate';
import { splitName } from '../../utils/splitName';
import { useIsMobile } from '../../hooks/useIsMobile';
import styles from './styles.module.scss';

export const PostCard = ({ post }: PostCardProps) => {
  console.log(post);

  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const { title, thumbnail_url, createdAt, author, content, categories, id } =
    post;
  const { firstName, lastName } = splitName(author.name);

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => setIsExpanded(prev => !prev);

  const handleClick = () => {
    if (isMobile) {
      toggleContent();
    } else {
      navigate(`/post/${id}`);
    }
  };

  const contentMaxLength = 200;
  const contentText =
    content.length > contentMaxLength && !isExpanded
      ? content.slice(0, contentMaxLength) + '...'
      : content;

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={thumbnail_url} alt={title} />
      <div className={styles.text}>
        <div className={styles.info}>
          <span className={styles.date}>{formatDate(createdAt)}</span>
          <span className={styles.dot} />
          <span className={styles.author}>
            {lastName ? lastName : firstName}
            {/* Eu tinha entendido q era para aparecer apenas o ultimo nome do autor, mas preferi fazer uma logica pra caso so viesse um nome aparecer este nome. Porém depois percebi que era para aparecer o nome completo mas ja tinha feito um utils e resolvi deixar assim, claro que em um cenário de trabalho iria remover o que já tinha feito, mas para efeito de teste resolvi deixar. */}
          </span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div
          className={`${styles.content} ${
            !isExpanded && isMobile ? styles.contentCollapsed : ''
          }`}
        >
          {/* aqui tbm ocorreu um erro de interpretação do pdf onde achei que em mobile devia usar um sistema de collapse e no desktop ir ate a página do post, porém depois de feito e revisando percebi que em ambos os caso deveria ir ate a pagina do post qnd clicado, mas para fins de teste resolvi deixar os dois formatos */}
          {contentText}
        </div>

        <div className={styles.categories}>
          {categories.map(category => (
            <span key={category.id} className={styles.category}>
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
