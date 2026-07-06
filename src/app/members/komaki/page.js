import styles from "./page.module.css";

export default function SampleMemberPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>小牧 慎太郎</h1>
      <p>職業：エンジニア見習い</p>
      <p>身につけたい技術：React / Node.js / Django</p>
      <p className={styles.message}>GitHub の共同開発を勉強中！</p>
    </section>
  );
}
