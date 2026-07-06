import styles from './page.module.css'

export default function SampleMemberPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>自己紹介👩‍💻</h1>
      <div className={styles.members}>
            <div className={styles.imageWrapper}>
                <div className={styles.photo}></div>
            </div>
            <div className={styles.profil}>
                    <h3>名前: tabusi kaori</h3>
                    <p>職業：Webエンジニア見習い</p>
                    <p>好きな技術：React / Next.js</p>
            </div>
     </div>
      <p className={styles.message}>GitHub の共同開発を楽しく学びましょう！</p>
    </section>
  )
}

//   return (
//     <section className={styles.container}>
//       <h1 className={styles.name}>tabusi</h1>
//       <p>職業：Webエンジニア見習い</p>
//       <p>好きな技術：React / Next.js</p>
//       <p className={styles.message}>GitHub の共同開発を楽しく学びましょう！</p>
//     </section>
//   )

