import Post from './Post';

export default function App() {
  const postsNoticias = [
    {
      id: 1,
      titulo: 'NOVO IMPERADOR! Monkey D. Luffy desafia o Governo Mundial!',
      autor: 'Morgans (Jornal Econômico do Mundo)',
      recompensa: 'Recompensa: 3.000.000.000 Berries',
      conteudo: 'Após os eventos chocantes em Wano, o capitão dos Chapéus de Palha atingiu o topo do mundo pirata. Testemunhas afirmam que ele desperta uma força divina conhecida como o Deus do Sol Nika!'
    },
    {
      id: 2,
      titulo: 'Caçador de Piratas Roronoa Zoro domina o Estilo de 3 Espadas com Haki do Rei',
      autor: 'Jornal do East Blue',
      recompensa: 'Recompensa: 1.111.000.000 Berries',
      conteudo: 'O espadachim do bando derrotou King, o Incêndio. Rumores dizem que ele agora carrega uma das lendárias espadas de Oden, a temida Enma.'
    },
    {
      id: 3,
      titulo: 'Onde está o lendário tesouro One Piece?',
      autor: 'Dr. Vegapunk',
      recompensa: 'Transmissão Mundial',
      conteudo: 'O segredo sobre os Poneglyphs de Rota e os Séculos Perdidos está prestes a ser revelado. Quem quer que chegue à ilha final de Laugh Tale mudará o destino do oceano para sempre.'
    }
  ];

  return (
    <div style={styles.pageWrapper}>
      <main style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>🏴‍☠️ Diário de Notícias do Novo Mundo 🏴‍☠️</h1>
          <p>As últimas novidades sobre a Era dos Piratas!</p>
        </header>

        {postsNoticias.map(post => (
          <Post
            key={post.id}
            titulo={post.titulo}
            autor={post.autor}
            recompensa={post.recompensa}
            conteudo={post.conteudo}
          />
        ))}
      </main>

      {/* FOOTER PERSONALIZADO */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Desenvolvido por <strong>Ulisses "Kakaroto" Guimarães</strong> 
        </p>
        <div style={styles.linksContainer}>
          <a 
            href="https://github.com/uliguimaraes" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.link}
          >
            🐙 GitHub
          </a>
          <span style={styles.separator}>|</span>
          <a 
            href="https://www.linkedin.com/in/ulisses-guimaraes-" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.link}
          >
            💼 LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    maxWidth: '700px',
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Georgia, serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    borderBottom: '3px double #111',
    paddingBottom: '10px',
  },
  title: {
    fontSize: '1.75rem',
    margin: '0 0 8px 0',
    lineHeight: '1.2',
  },
  footer: {
    marginTop: '40px',
    padding: '20px 10px',
    borderTop: '2px solid #111',
    backgroundColor: '#fffbe6',
    textAlign: 'center',
    boxShadow: '0 -2px 5px rgba(0,0,0,0.05)',
  },
  footerText: {
    fontSize: '1rem',
    margin: '0 0 8px 0',
    color: '#222',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
  },
  link: {
    color: '#b30000',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  },
  separator: {
    color: '#666',
  },
};