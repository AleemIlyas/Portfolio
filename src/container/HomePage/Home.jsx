import React , { lazy , Suspense } from 'react'
import Introduction from '../../components/Introduction/introduction'
const Project = lazy(()=>import('../Projects/project'));
const About = lazy(()=>import('../../components/About/about'));
const Footer = lazy(()=>import('../../components/Footer/footer'));
import Spinner from '../../components/UI/Spinner/spinner';

export default function Home() {
  return (
    <React.Fragment>
        <Introduction />
        <Suspense fallback={<Spinner />}>
        <Project />
        <About />
        <Footer />
        </Suspense>
    </React.Fragment>
  )
}
