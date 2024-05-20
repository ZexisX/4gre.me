import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

import cn from 'lib/classNames'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props: any) {
  const { children, ...customMeta } = props
  const router = useRouter()

  const meta = {
    title: 'DOMAIN | KHANG.AI',
    description:
      'The domain of Le Vinh Khang, a creative and innovative programmer, offering cutting-edge artificial intelligence solutions',
    image: 'https://meshgrad.cretu.dev/static/og.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <div
        className={cn(
          'text-primary',
          'relative h-full min-h-screen w-full',
          'flex flex-col',
          'motion-reduce:transition-none motion-reduce:transform-none'
        )}
      >
        <Head>
          <meta name='robots' content='follow, index' />
          <meta
            property='og:url'
            content={`https://meshgrad.cretu.dev/${router.asPath}`}
          />
          <link
            rel='canonical'
            href={`https://meshgrad.cretu.dev/${router.asPath}`}
          />
          <meta property='og:type' content={meta.type} />
          <meta property='og:site_name' content='' />
          <meta property='og:description' content={meta.description} />
          <meta property='og:title' content={meta.title} />
          <meta property='og:image' content={meta.image} />
          {meta.date && (
            <meta property='article:published_time' content={meta.date} />
          )}
        </Head>

        <main
          className={cn(
            'px-4 mt-20',
            'max-w-2xl',
            'mx-auto my-auto',
            'flex flex-col justify-center gap-12',
            'divide-y divide-gray-300 dark:divide-gray-700',
            'rounded-lg'
          )}
        >
          <div className='flex flex-col gap-2'>{children}</div>
        </main>
      </div>
    </>
  )
}
