import { useEffect } from 'react';
import Header from '../layout/Header';
import Hero from '../components/hero/Hero';
import Service from '../components/service/Service';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Portfolio from '../components/portfolio/Portfolio';
import BrandSlider from '../components/brands/BrandSlider'
import Reviews from '../components/reviews/Reviews'
import Contact from '../components/contact/Contact';
import Footer from '../layout/Footer';
import { useDispatch } from 'react-redux';
import { setLight } from '../store/counter/ImageSlice';
import Skills from '../components/skills/Skills';

function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLight())
  }, [dispatch])

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Skills />
      <Experience />
      <Portfolio />
      <BrandSlider />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
