import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Send ATACMS to Ukraine!</title>
        <meta name="description" content="Learn what ATACMS is and why Ukraine needs it." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Analytics />
      <main className="main">

          {/* Stand with Ukraine against genocide */}
          <div className="relative bg-black">
              <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                  <div className="sm:px-16 text-center">
                      <p className="font-medium text-white">
                          <span className="md:inline"> 	🇺🇦 Stand with Ukraine against genocide</span>
                          <span className="block sm:ml-2 sm:inline-block">
                              <a href="https://u24.gov.ua/" target="_blank" className="font-bold text-white underline" rel="noreferrer">
                                Learn more<span aria-hidden="true"> &rarr;</span>
                              </a>
                          </span>
                      </p>
                  </div>
              </div>
          </div>

          {/* What is ATACMS? */}
          <div className="bg-white">
              <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
                  <div className="text-center">
                      <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                          What is ATACMS?
                      </p>
                      <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                          In short, ATACMS™ is a missile that can precisely hit targets deep behind enemy lines.
                      </p>
                  </div>
              </div>
          </div>

          {/* Why send ATACMS to Ukraine? */}
          <div className="bg-gray-50 pt-12 sm:pt-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-4xl text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                          Why send ATACMS to Ukraine?
                      </h2>
                      <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                          Ukraine needs long-range missiles to hit enemy ammunition depots, logistics hubs, command centers and airfields further behind the front line.
                      </p>
                  </div>
              </div>

              {/* ATACMS Features */}
              <div className="mt-10 bg-white pb-12 sm:pb-16">
                  <div className="relative">
                      <div className="absolute inset-0 h-1/2 bg-gray-50" />
                      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                          <div className="mx-auto max-w-4xl">
                              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Range</dt>
                                      <dd className="order-1 text-5xl font-bold tracking-tight text-black">300 km</dd>
                                  </div>
                                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Precision Guidance</dt>
                                      <dd className="order-1 text-5xl font-bold tracking-tight text-black">GPS</dd>
                                  </div>
                                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Warhead</dt>
                                      <dd className="order-1 text-5xl font-bold tracking-tight text-black">500 lb</dd>
                                  </div>
                              </dl>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* This is urgent! */}
          <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-prose text-lg">
                  <h1>
                      <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        This is urgent!
                    </span>
                  </h1>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                      Ukrainians are dying <b>every day</b> while Russia fires rockets and missiles with impunity. Ukraine must be able to match the capability of the enemy in order to stop them.
                  </p>
              </div>
          </div>

          {/* Can we do it? */}
          <div className="relative bg-gray-50 px-6 lg:px-8 mt-10 pt-2 pb-4">
              <div className="mx-auto max-w-prose text-lg">
                  <h1>
                      <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Can we do it?
                    </span>
                  </h1>
                  <p className="mt-8 text-xl leading-8 text-gray-500">
                      - Neighboring allies can quickly transfer these missiles<br/>
                      - Targets can be authorized by allies before striking<br/>
                      - Ukraine already has the launchers for short range missiles<br/>
                      - Missiles are ultimately cheaper than the massive cost of human life<br/>
                  </p>
              </div>
          </div>

          {/* How can I help? */}
          <div className="bg-black">
              <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
                  <div className="lg:w-0 lg:flex-1">
                      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
                          How can I help?
                      </h2>
                      <p className="mt-3 text-lg leading-6 text-gray-300 text-center">
                          Call your government representatives and let them know that you support sending ATACMS to Ukraine.<br/>
                          Be brief and let them know this is an urgent matter.
                      </p>
                  </div>
              </div>
          </div>

          {/* Frequently asked questions */}
          <div className="bg-white">
              <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
                  <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
                  <div className="mt-12">
                      <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
                          <div>
                              <dt className="text-lg font-medium leading-6 text-gray-900">What does ATACMS stand for?</dt>
                              <dd className="mt-2 text-base text-gray-500">ATACMS stands for <u>A</u>rmy <u>Tac</u>tical <u>M</u>issile <u>S</u>ystem.</dd>
                          </div>
                          <div>
                              <dt className="text-lg font-medium leading-6 text-gray-900">How do you pronounce ATACMS?</dt>
                              <dd className="mt-2 text-base text-gray-500">You can pronounce it like &quot;attack-ems&quot;.</dd>
                          </div>
                          <div>
                              <dt className="text-lg font-medium leading-6 text-gray-900">Does it work?</dt>
                              <dd className="mt-2 text-base text-gray-500">ATACMS was used with great success during Operation Desert Storm.</dd>
                          </div>
                          <div>
                              <dt className="text-lg font-medium leading-6 text-gray-900">Who has ATACMS?</dt>
                              <dd className="mt-2 text-base text-gray-500">The United States, United Arab Emirates, Bahrain, South Korea, Turkey, Romania, Poland, and Greece.</dd>
                          </div>
                      </dl>
                  </div>
              </div>
          </div>

          {/* Footer for copyright and trademarks */}
          <footer className="bg-white">
              <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
                  <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                      2023 - <a href="https://atacms.info">atacms.info</a><br/>
                      <br/>
                      ATACMS™ is a registered trademark of Lockheed Martin Corporation.
                  </p>
              </div>
          </footer>
      </main>
    </>
  )
}
