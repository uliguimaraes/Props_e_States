// src/Post.jsx
import { useState } from 'react';[cite: 9]

export default function Post({ titulo, autor, conteudo }) {
  // Estado isolado para o número de likes deste post específico[cite: 8, 9]
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);[cite: 10]
  };

  return (
    <div style={styles.card}>
      <h2>{titulo}</h2>
      <p style={styles.autor}>Por: <strong>{autor}</strong></p>
      <p style={styles.conteudo}>{conteudo}</p>
      
      <div style={styles.footer}>
        <button onClick={handleLike} style={styles.button}>
          ❤️ Curtir
        </button>
        <span>{likes} {likes === 1 ? 'curtida' : 'curtidas'}</span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  autor: {
    fontSize: '0.9rem',
    color: '#666',
    marginTop: '-8px',
  },
  conteudo: {
    margin: '12px 0',
    lineHeight: '1.5',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '12px',
  },
  button: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};