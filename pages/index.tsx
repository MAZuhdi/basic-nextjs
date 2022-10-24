import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
      <Layout pageTitle='Home Page'>
        <h1 className={styles['title-homepage']}>Welcome, Agung</h1>
      </Layout>
  )
}

export default Home
