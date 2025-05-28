import Header from "../components/header"
import Section from '../components/section'
import Service from '../components/service'
import StatsSection from '../components/stats'
import Testimonial from '../components/test'
import ClientLogos from '../components/clientlogo'
import LatestNews from '../components/latestnew'
import Footer from '../components/footer'

function Home() {
  
  return (
    <div>
      <Header/>
      <Section/>
      <Service/>
      <StatsSection/>
      <Testimonial/>
      <ClientLogos/>
      <LatestNews/>
      <Footer/>
    </div>
  )
}

export default Home
