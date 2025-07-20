import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NZ Digital: Web Design &amp; Digital Marketing | Auckland, New Zealand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Web design & lead generation for thriving businesses
        </p>
      </main>

      <Footer />
    </div>
  )
}
