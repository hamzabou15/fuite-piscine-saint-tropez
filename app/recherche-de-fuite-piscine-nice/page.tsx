import HeroSection from '@/components/HeroSection'
import FuiteInfos from '@/components/recherche-fuite-piscine-nice/FuiteInfos'
import FuiteInfos2 from '@/components/recherche-fuite-piscine-nice/FuiteInfos2'
import FuiteInfos3 from '@/components/recherche-fuite-piscine-nice/FuiteInfos3'
import FuiteInfos4 from '@/components/recherche-fuite-piscine-nice/FuiteInfos4'
import FuiteInfos5 from '@/components/recherche-fuite-piscine-nice/FuiteInfos5'
import FuiteInfos6 from '@/components/recherche-fuite-piscine-nice/FuiteInfos6'
import FuiteInfos7 from '@/components/recherche-fuite-piscine-nice/FuiteInfos7'
import FuiteInfos8 from '@/components/recherche-fuite-piscine-nice/FuiteInfos8'
import KeyPointsSection from '@/components/recherche-fuite-piscine-nice/KeyPointSection'
import React from 'react'

const page = () => {
  return (
    <section>
      <HeroSection
        title='Recherche de fuite piscine à Nice'
      />
      <FuiteInfos />
      <FuiteInfos2 />
      <FuiteInfos3 />
      <FuiteInfos4 />
      <FuiteInfos5 />
      <FuiteInfos6 />
      <FuiteInfos7 />
      <FuiteInfos8 />
      <KeyPointsSection />
    </section>
  )
}

export default page