import './App.css'
import Banner from './components/Banner/Banner'
import Counter from './components/CounterPage/Counter'
import DesignCourse from './components/DesignCourse/DesignCourse'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PricingPlan from './components/PricingPlan/PricingPlan'
import ReviewSection from "./components/ReviewSection/ReviewSection"
import UpperFooter from './components/UpperFooter/UpperFooter'
import WorkFlow from "./components/WorkFlow/WorkFlow"
function App() {
  return (
    <>
      <Header />
      <Banner />
      <ReviewSection />
      <Counter />
      <DesignCourse />
      <WorkFlow />
      <PricingPlan />
      <FAQ />
      <UpperFooter />
      <Footer />
    </>
  )
}

export default App
