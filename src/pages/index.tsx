import styles from '../styles/home.module.scss'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Ignws</title>
      </Head>
      <h2 className={styles.title}>
        Hello<span>word</span>
      </h2>
    </>
  )
}
 