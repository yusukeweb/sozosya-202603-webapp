import styles from './page.module.css'

export default function MaedaPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>前田 真由美</h1>
      <p>職業：Webエンジニア職業訓練生</p>
      <p>好きな技術：React / Next.js</p>
      <p className={styles.message}>GitHub の共同開発を楽しく学びます！</p>
    </section>
  )
}
