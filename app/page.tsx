import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import WalletGenerator from "@/components/WalletGenerator"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WalletGenerator/>
      <Footer/>
    </div>
  )
}

export default page