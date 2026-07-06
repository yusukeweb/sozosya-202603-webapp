import styles from './page.module.css'

export default function SampleMemberPage() {
  return (
    <section className={styles.container}>
        <h1 className={styles.name}>山田　愛絵</h1>
        <p>職業：Webエンジニア見習い</p>
        <p>目標：フロントエンドエンジニア</p>
        <p>好きな技術：React / Next.js</p>
        <p className={styles.message}>
        React・Next.jsを中心にフロントエンド開発を学習しています。<br />
        Webサイト制作やWebアプリ開発に取り組みながら、
        ユーザーにとって分かりやすく、使いやすいサービスを作ることを目標に、
        日々アウトプットを重ねて技術力を磨いています。
        </p>    
    </section>
  )
}
