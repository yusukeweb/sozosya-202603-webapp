import styles from './page.module.css'

export default function SakoPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>佐古 悠輔</h1>
      <p>職業：フリーランス</p>
      <p>好きな技術：React / Next.js</p>
      <p className={styles.message}>GitHub の共同開発を楽しく学びましょう！</p>
    </section>
  )
}
