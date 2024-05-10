import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import FAQ from './FAQ'
import Flashcard from './Flashcard'

const Home = () => {
  return (
    <div className='flex flex-col mb-[10rem]'>
      <BreadCrumbs/>
      <Flashcard/>
      <FAQ/>
    </div>
  )
}

export default Home