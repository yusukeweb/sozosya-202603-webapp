
import styles from './members.module.css'

export default function MembersPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>古郷 啓大</h1>
      <p>勉強中：React / Next.js</p>
      <p className={styles.messeage}>GitHub共同開発自己紹介カード制作</p>
    </section>
  )
}