import { useState } from 'react';

export default function Post({ titulo, autor, conteudo, recompensa, foto }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.badge}>{recompensa}</span>
        <h2>{titulo}</h2>
      </div>
      
      <p style={styles.autor}>Relatório por: <strong>{autor}</strong> 🦅</p>
      <p style={styles.conteudo}>{conteudo}</p>
      
      <div style={styles.footer}>
        <button onClick={handleLike} style={styles.button}>
          ☠️ Dar Apoiadores ({likes})
        </button>
        <span style={styles.status}>
          {likes > 0 ? `🔥 ${likes} piratas apoiam essa notícia!` : 'Nenhum apoio ainda'}
        </span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '2px solid #333',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#fffbe6', // Tom amarelado lembrando jornal antigo / cartaz de procurado
    boxShadow: '4px 4px 0px #111',
    color: '#222',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  badge: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#b30000',
    textTransform: 'uppercase',
  },
  autor: {
    fontSize: '0.85rem',
    color: '#555',
    margin: '4px 0 12px 0',
  },
  conteudo: {
    fontSize: '1rem',
    lineHeight: '1.6',
    margin: '12px 0',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginTop: '16px',
    borderTop: '1px dashed #bbb',
    paddingTop: '12px',
  },
  button: {
    padding: '10px 18px',
    border: '2px solid #111',
    borderRadius: '6px',
    backgroundColor: '#ff4757',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.1s',
  },
  status: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#333',
  },
};