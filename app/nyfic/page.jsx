import React from 'react'
import AnimatedLink from '@/components/AnimatedLink'

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <AnimatedLink 
        href="https://www.nyfic.app/"
        className="text-2xl font-bold"
      >
        NYFIC.APP
      </AnimatedLink>
      <div className='text-center px-20 mt-8'>
        <p>
          I'm currently building a study app that connects components of learning 
          into an AI mentorship experience. You track subjects, your knowledge, goals, 
          and your study time. Then, you have access to a mentor that learns with you, 
          understands you learning journey. The AI mentor can help you with generating flashcards
          based on your material, spotting gaps in your knowledge, providing study tips based 
          on how you currently study.  
        </p>

        <p>
          My vision for it is to create not just a productivity tool or a flashy "powered-by-ai"-app but a useful companion that 
          supports your learning journey.
        </p>
        <p>
          I also think it is important that we learn to integrate language models into current tools (like a study app) in 
          a way that is useful to us. So that's also what I am experimenting with here; How can we use 
          language models to enhance our learning experience without making it a gimmick? 
        </p>
      </div>
    </section>
  )
}

export default page