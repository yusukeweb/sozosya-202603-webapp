import styles from "./members.module.css";

export default function MembersPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>古郷 啓大</h1>
      <div className={styles.contents}>
        <div>
          <h2 className={styles.about}>勉強中</h2>
          <p>React / Next.js</p>
        </div>
        <div>
          <h2 className={styles.about}>メッセージ</h2>
          <p>GitHub共同開発自己紹介カード制作中</p>
        </div>
      </div>
    </section>
  );
}
