import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import { generateJSXMeshGradient } from 'meshgrad'

import Container from 'components/Container'
import cn from 'lib/classNames'

const ELEMENTS = 6

export default function Home() {
  const [isServer, setIsServer] = useState(true)
  const [history, setHistory] = useState([generateJSXMeshGradient(ELEMENTS)])
  const [index, setIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false) // State to track if the component is loaded

  const handleNewGradient = () => {
    setIndex(history.length)
    setHistory([...history, generateJSXMeshGradient(ELEMENTS)])
  }

  useEffect(() => {
    setIsServer(false)
    // Set a timeout to update isLoaded after a delay
    const timeout = setTimeout(() => setIsLoaded(true), 500)
    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Container>
      <div
        className={`relative inset-0 flex flex-col items-center justify-center gap-4 ${
          isLoaded ? 'fade-in' : ''
        }`}
      >
        <VersionBadge />
        <h1 className='font-semibold tracking-tighter text-7xl whitespace-nowrap'>
          DOMAIN | KHANG.AI
        </h1>

        <p className='text-xl text-center text-tertiary'>
          The domain of Le Vinh Khang, a creative and innovative programmer,
          offering cutting-edge artificial intelligence solutions
        </p>
        <div className='flex flex-col items-center justify-center gap-4 mb-12 md:flex-row'>
          <GitHubButton />
        </div>
        <div
          className='absolute w-[300px] h-[500px] md:w-[800px] md:h-[700px] mt-64 opacity-[12%] backdrop-blur-3xl blur-3xl pointer-events-none rounded-[15rem]'
          style={isServer ? {} : history[index]}
        />
        <div
          style={isServer ? {} : history[index]}
          className='z-10 w-48 h-48 rounded-xl'
        />
        <div className='flex gap-4'>
          <button
            onClick={() => {
              if (index > 0) {
                setIndex(index - 1)
              }
            }}
            className={cn(
              'transition duration-200 ease-in-out group text-tertiary hover:text-sky-600',
              index > 0 ? 'opacity-100' : 'opacity-0'
            )}
          >
            <span
              aria-hidden='true'
              className='inline-block mr-1 transition-transform duration-200 ease-in-out translate-x-0 group-hover:-translate-x-1'
            >
              ←
            </span>
            Previous
          </button>

          <button
            onClick={() => {
              if (index < history.length - 1) {
                setIndex(index + 1)
              }
            }}
            className={cn(
              'transition duration-200 ease-in-out group text-tertiary hover:text-sky-600',
              index < history.length - 1 ? 'opacity-100' : 'opacity-0'
            )}
          >
            Next
            <span
              aria-hidden='true'
              className='inline-block ml-1 transition-transform duration-200 ease-in-out translate-x-0 group-hover:translate-x-1'
            >
              →
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </Container>
  )
}

function VersionBadge() {
  return (
    <span className='px-4 py-2 bg-gray-100 rounded-xl dark:bg-gray-900'>
      v0.0.0
    </span>
  )
}

function Footer() {
  return (
    <p className='mx-auto my-16 text-quaternary'>
      Crafted with care by
      <a
        className='ml-1 text-primary group'
        href='https://khang.ai'
        target='_blank'
        rel='noopener noreferrer'
      >
        Le Vinh Khang
        <span className='invisible ml-1 transition-opacity duration-100 ease-in-out group-hover:visible'>
          ↗
        </span>
      </a>
    </p>
  )
}

function GitHubButton() {
  return (
    <a
      href='mailto:hello@khang.ai'
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-2 px-4 py-2.5 transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-xl'
    >
      <Image
        width={18}
        height={18}
        src="https://img.icons8.com/fluency/18/contacts.png"
        alt="contacts"
      />
      Contact me
    </a>
  )
}

