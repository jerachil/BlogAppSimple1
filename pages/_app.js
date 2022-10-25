import React, { useEffect, useState } from 'react';
import { Layout } from '../components'
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}



