import Image from 'next/image'
import Button from '../../components/Button'
import Diseases from '@/components/Diseases'
import DiseasesBelow from '@/components/DiseasesBelow'

const DiseasePage = () => {
  return (
      // <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <>
      <div className="max-container  -my-4 bg-gray-100 bg-[url('/images/agri.jpg')] bg-cover bg-center bg-no-repeat text-white p-8 rounded-lg">
              <div className="container mx-auto">
                  <div className="flex flex-wrap text-center justify-center al -mx-6 gap-2 lg:gap-6">

                    <h3 className=" mb-2 mt-20 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-4xl">
                    Disease Control
                    </h3>
                  </div>
                  <p className="text-center justify-center text-white sm:text-2xl lg:text-xl xl:text-4xl">Proactively protect crops</p>
              </div>
        </div>
        <Diseases/>
        <div className="w-full border-t border-black mb-10" />
        <DiseasesBelow/>
        {/* <AboutHome />
<div className="w-full border-t border-black mb-10" />
<AboutSection />
<div className="w-full border-t border-black mb-10" />
<AboutMission /> */}
</>

  )
}

export default DiseasePage