import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import MnemonicDisplay from "@/components/MnemonicDisplay"
import Navbar from "@/components/Navbar"
import WalletGenerator from "@/components/WalletGenerator"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <WalletGenerator/> */}
      <MnemonicDisplay/>
      <Footer/>
    </div>
  )
}

export default page