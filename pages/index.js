import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/Header'
import Card from '../components/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airlines</title>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='List of Airlines in the World' />
        <meta name='author' content='Chris Achinga' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          referrerpolicy='no-referrer'
        />
      </Head>

      <Header />

      <section className='py-5 text-center container'>
        <div className='row py-lg-5'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1 className='fw-light'>World Airlines</h1>
            <p className='lead text-muted'>
              A Collection of all Airlines Worldwide
            </p>
          </div>
        </div>
      </section>

      <section className='bg-light py-5'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      {/* script tags */}
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
        crossOrigin='anonymous'
      />
    </div>
  )
}
