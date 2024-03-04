'use client'

import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Reveal from './animations/reveal';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const Answers = [
  {
    question: 'Could you provide samples or showcase your previous projects?',
    answer: 'Certainly! Please download our portfolio below '
  },
  {
    question: `What&apos;s your complete process from design to manufacturing?`,
    answer: 'Our process begins with an in-depth consultation to understand your needs. We then move to design, prototyping, and testing. Once approved, we assist with sourcing components and oversee the manufacturing phase, ensuring quality at every step.'
  },
  {
    question: `How do you handle and protect my intellectual property?`,
    answer: `Your IP&apos;s security is paramount to us. We sign non-disclosure agreements at the outset and have strict internal protocols to ensure your intellectual property remains confidential.`
  },
  {
    question: `How is your pricing structured and what are the estimated timelines?`,
    answer: `Our pricing is in two model turnkey-based & retainer based, factoring in complexity and required resources.  It typically takes 3-6 months from design to prototype. We&apos;ll provide a detailed quote and timeline after our initial consultation..`
  },
  {
    question: `What post-design support do you offer?`,
    answer: `We offer a range of post-design services, including iterative refinements, manufacturing handoff, and support for post-launch modifications. Our aim is to ensure your product&apos;s success even after it hits the market.`
  },
]

export default function FAQ() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='container mx-auto py-[30px] px-[10%] flex flex-col items-center'>
      <p className='font-[600]  text-[28px] md:text-[38px] lg:text-[46px] leading-[38px] lg:leading-[46px]'>FAQ</p>
      <p className='text-[14px] lg:text-[17px] leading-[22.5px] mt-[15px]'>If you can’t find your question, please reach out to us directly.</p>
      <Reveal>
        <div className='my-[20px]'>
          {Answers.map((faq, id) => {
            return (
              <div key={id}>
                <Accordion open={open === id} icon={<Icon id={id} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(id)}>{faq.question}</AccordionHeader>
                  <AccordionBody>
                    {faq.answer}
                  </AccordionBody>
                </Accordion>
              </div>
            )
          })}
        </div>
      </Reveal>
    </div>
  )
}
