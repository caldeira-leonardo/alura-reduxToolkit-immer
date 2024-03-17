import styles from "./TituloSemImagem.module.scss";

export default function TituloSemImagem({ children, titulo, descricao }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <h2 className={styles.descricao}>{descricao}</h2>
      {children}
    </div>
  );
}
