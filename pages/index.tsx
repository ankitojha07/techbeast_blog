import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techbeast Blog</title>
        <meta name="description" content="Learning project for Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://techbeast69.netlify.app">Techbeast69</a>
        </h1>

        <h3 className={styles.heading3}>Learning Materials!</h3>
        <div className={styles.grid}>
          
          <Link href="/learn/next" className={styles.card}>
          
            <h2>Learn Next JS &rarr;</h2>
            <p>Next JS tutorials for everyone.</p>
          
          </Link>
          <Link href="/learn/ReactJs" className={styles.card}>
            <h2>Learn React JS &rarr;</h2>
            <p>React JS tutorial for everyone.</p>
            </Link>
          <Link href="/learn/Vanilla JS" className={styles.card}>
            <h2>Learn Vanilla JS &rarr;</h2>
            <p>Vanilla JS tutorial for everyone.</p>
            </Link>
        </div>
        <h3 className={styles.heading3}>Social Profiles!</h3>
        <div className={styles.grid}>
        <a
            href="https://instagram.com/ankittojha"
            target="_blank"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
            <p>
              Instagram Profile of Techbeast69
            </p>
          </a>
        <a
            href="https://github.com/techbeast69"
            target="_blank"
            className={styles.card}
          >
            <h2>Github &rarr;</h2>
            <p>
              Github Profile of Techbeast69
            </p>
          </a>
        <a
            href="https://linkedin.com/ankitojha07"
            target="_blank"
            className={styles.card}
          >
            <h2>LinkedIn &rarr;</h2>
            <p>
              LinkedIn Profile of Techbeast69
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://techbeast69.netlify.app/"
          target="_blank"
        >
          Powered by{'  '} <span> _</span> <h3> Ankt Ojha</h3>
        </a>
      </footer>
    </div>
  )
}
