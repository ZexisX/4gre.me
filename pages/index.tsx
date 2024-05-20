import { useEffect, useState } from 'react'
import { generateJSXMeshGradient } from 'meshgrad'
import Container from 'components/Container'
import cn from 'lib/classNames'
import packageJSON from '../../meshgrad/package.json'

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
      v{packageJSON.version}
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
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 48 48'
        width='18px'
        height='18px'
      >
        <linearGradient
          id='0_HTEE9QzyKb~SwdZ1fZaa'
          x1='-52.5'
          x2='-52.5'
          y1='80.987'
          y2='76.259'
          gradientTransform='rotate(90 24 92)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='.3' stop-color='#9c6500' />
          <stop offset='.651' stop-color='#f2d33a' />
        </linearGradient>
        <rect
          width='5'
          height='7'
          x='35'
          y='12'
          fill='url(#0_HTEE9QzyKb~SwdZ1fZaa)'
        />
        <linearGradient
          id='0_HTEE9QzyKb~SwdZ1fZab'
          x1='-45'
          x2='-45'
          y1='80.987'
          y2='76.259'
          gradientTransform='rotate(90 24 92)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='.3' stop-color='#1a7317' />
          <stop offset='.65' stop-color='#6dd669' />
        </linearGradient>
        <rect
          width='5'
          height='8'
          x='35'
          y='19'
          fill='url(#0_HTEE9QzyKb~SwdZ1fZab)'
        />
        <linearGradient
          id='0_HTEE9QzyKb~SwdZ1fZac'
          x1='-37'
          x2='-37'
          y1='80.987'
          y2='76.259'
          gradientTransform='rotate(90 24 92)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='.3' stop-color='#0670ad' />
          <stop offset='.65' stop-color='#08b7e8' />
        </linearGradient>
        <rect
          width='5'
          height='8'
          x='35'
          y='27'
          fill='url(#0_HTEE9QzyKb~SwdZ1fZac)'
        />
        <linearGradient
          id='0_HTEE9QzyKb~SwdZ1fZad'
          x1='-29'
          x2='-29'
          y1='80.987'
          y2='76.28'
          gradientTransform='rotate(90 24 92)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='.301' stop-color='#5829a1' />
          <stop offset='.65' stop-color='#8f4fe8' />
        </linearGradient>
        <path
          fill='url(#0_HTEE9QzyKb~SwdZ1fZad)'
          d='M40,41v-6h-5v8h3C39.105,43,40,42.105,40,41z'
        />
        <linearGradient
          id='0_HTEE9QzyKb~SwdZ1fZae'
          x1='-59.5'
          x2='-59.5'
          y1='80.987'
          y2='76.259'
          gradientTransform='rotate(90 24 92)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='.302' stop-color='#a63f62' />
          <stop offset='.65' stop-color='#e86b97' />
        </linearGradient>
        <path
          fill='url(#0_HTEE9QzyKb~SwdZ1fZae)'
          d='M40,7c0-1.105-0.895-2-2-2h-3v7h5V7z'
        />
        <linearGradient
          id='0_HTEE9QzyKb~SwdZ1fZaf'
          x1='13.132'
          x2='31.365'
          y1='4.584'
          y2='42.374'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stop-color='#fc7d5b' />
          <stop offset='.091' stop-color='#f87855' />
          <stop offset='.683' stop-color='#df5731' />
          <stop offset='1' stop-color='#d64b24' />
        </linearGradient>
        <path
          fill='url(#0_HTEE9QzyKb~SwdZ1fZaf)'
          d='M37,7c0-1.105-0.895-2-2-2H10C8.895,5,8,5.895,8,7v34c0,1.105,0.895,2,2,2h25	c1.105,0,2-0.895,2-2V7z'
        />
        <radialGradient
          id='0_HTEE9QzyKb~SwdZ1fZag'
          cx='23'
          cy='18'
          r='5'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='.486' />
          <stop offset='1' stop-opacity='0' />
        </radialGradient>
        <circle
          cx='23'
          cy='18'
          r='5'
          fill='url(#0_HTEE9QzyKb~SwdZ1fZag)'
          opacity='.15'
        />
        <path
          d='M16,31v2.114C16,34.155,16.845,35,17.886,35h10.227C29.155,35,30,34.155,30,33.114V31	c0-5-3.134-8-7-8S16,26,16,31z'
          opacity='.05'
        />
        <path
          d='M16.5,30.626l0,2.431c0,0.797,0.646,1.443,1.443,1.443h10.114c0.797,0,1.443-0.646,1.443-1.443V30.5	c0-4.188-2.96-7.05-6.592-6.999C19.333,23.551,16.5,26.483,16.5,30.626z'
          opacity='.07'
        />
        <circle cx='23' cy='18' r='4' fill='#fff' />
        <path
          fill='#fff'
          d='M29,30c0-3.375-2.787-6.099-6.185-5.997C19.532,24.101,17,26.966,17,30.252V33c0,0.552,0.448,1,1,1	h10c0.552,0,1-0.448,1-1V30z'
        />
      </svg>
      Contact me
    </a>
  )
}
