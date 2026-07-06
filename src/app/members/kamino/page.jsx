import styles from './page.module.css'

export default function SampleMemberPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>サンプルno上野</h1>
      <p>職業：手打ちはできないコーディング屋さん</p>
      <p>好きな技術：AIマシマシ</p>
      <p className={styles.message}>もうメモ帳に手書きしていた頃には戻れません。ごめんなさい。</p>
    </section>
  )
}
