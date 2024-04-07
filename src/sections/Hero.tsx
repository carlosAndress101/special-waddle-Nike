import Button from "../components/Button"
import arrowRight from '../assets/icons/arrow-right.svg'
import {  statistics } from "../constants"
const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text font-palanquin text-xl text-transparent">
          Out Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px] md:mt-10">
          <span className="xl:bg-white rounded-full xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="inline-block animate-pulse duration-700 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent md:mt-3">Nike&nbsp;</span>
          Shoes
          </h1>
          <p className="mb-14 mt-6 text-lg font-medium leading-8 text-slate-600 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life
            </p>

          <Button label="shop now" iconUrl={arrowRight}/>
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-bold font-montserrat">{item.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
              </div>
            ))}
          </div>
      </div>
      <div className="relative flex justify-center items-center xl:min-h-screen">
        <img src="https://raw.githubusercontent.com/carlosAndress101/images/main/4DEaChi3LrQ3visJixn5z-transformed.png" 
        alt="shoes Air Max 1"
        width={610}
        height={500} 
        className="object-contain relative z-10"/>
      </div>
    </section>
  )
}

export default Hero
