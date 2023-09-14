import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flare Fire Swap</title>
        <meta name="description" content="Monsters Market" />
        <link rel="icon" href="/profile.jpg" />
      </Head>
    </div>
  )
}
