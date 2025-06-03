import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/Cta'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
   <main>
    <h1 className='text-2xl underline'>Popular Companions</h1>
    <section className='home-section'>
        <CompanionCard
        id="700"
        name="Countsy the Number Wizard"
        topic="Derviatives and Integrals"
        subject="Math"
        duration="5 minutes"
        color="#E5D0FF"
        />
        <CompanionCard
        id="701"
        name="Countsy the Number Wizard"
        topic="Derviatives and Integrals"
        subject="Math"
        duration="5 minutes"
        color="#FCFFBD"
        />
        <CompanionCard
        id="702"
        name="Countsy the Number Wizard"
        topic="Derviatives and Integrals"
        subject="Math"
        duration="5 minutes"
        color="#BDE7FF"
        />
       
    </section>
    <section className='home-section'>
      <CompanionsList 
      title="Recen Completed Sessions"
      companions={recentSessions}
      className="w-2/3 max-lg:w-full"
      />
      <Cta />
    </section>
   </main>
  )
}

export default Page