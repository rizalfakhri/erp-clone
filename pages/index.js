import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {

  const [sidebarMinimized, setSidebarMinimized] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleSidebarMinimized = () => {

    let sidebarContainerMinimizedClasses = ['w-auto']
    let sidebarContainerClasses = ['md\:w-80']

    let sidebarContainer = document.getElementById('sidebarContainer')

    if( sidebarMinimized ) {
      sidebarContainerMinimizedClasses.map((className) => sidebarContainer.classList.add(className))
      sidebarContainerClasses.map((className) => sidebarContainer.classList.remove(className))
    }
    else
    {
      sidebarContainerMinimizedClasses.map((className) => sidebarContainer.classList.remove(className))
      sidebarContainerClasses.map((className) => sidebarContainer.classList.add(className))
    }

  }

  const handleDarkMode = () => {

    let darkClass = 'dark'

    let body = document.body;

    (isDarkMode)
      ? body.classList.add(darkClass)
      : body.classList.remove(darkClass)

  }

  useEffect(() => {
    handleSidebarMinimized()
    handleDarkMode()
  }, [sidebarMinimized, handleDarkMode])

  return (
    <>

    <Head>

      <title>ERP Clone Test - ehe~</title>

    </Head>

    <div className="flex">

      {  sidebarMinimized && <>

      <div  className="fixed w-full h-full md:hidden">
        <aside className="relative h-full bg-purple-700 dark:bg-black">
          <div className="flex flex-col pt-5 space-y-10">
            <div className="mx-10 ml-auto cursor-pointer" onClick={() => setSidebarMinimized(! sidebarMinimized)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>

            <div className="inline-flex my-10"></div>

            <div className="inline-flex mx-10">
              <AnimatePresence>
                { sidebarMinimized
                  ? (<>
                  <motion.span
                    initial={{ x: 20, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    exit={{ opacity: 0 }}
                    className="mx-2 my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </motion.span>
                    </>)

                  : (<><span className="mx-2 my-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </span></>)

                  }
              </AnimatePresence>

              { ! sidebarMinimized && <h6 className="mx-5 text-white text-md">Profile</h6> }
            </div>

            <div className="inline-flex mx-10">

              <AnimatePresence>
                { sidebarMinimized
                  ? (<>
                  <motion.span
                    initial={{ x: 20, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    exit={{ opacity: 0 }}
                    className="mx-2 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </motion.span>
                    </>)

                  : (<><span className="mx-2 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </span></>)

                  }
              </AnimatePresence>
              { ! sidebarMinimized && <h6 className="mx-5 text-white text-md">Dashboard</h6> }
            </div>

            <div className="inline-flex mx-10">

              <AnimatePresence>
                { sidebarMinimized
                  ? (<>
                  <motion.span
                    initial={{ x: 20, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    exit={{ opacity: 0 }}
                    className="mx-2 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </motion.span>
                    </>)

                  : (<><span className="mx-2 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </span></>)

                  }
              </AnimatePresence>
              { ! sidebarMinimized && <h6 className="mx-5 text-white text-md">Leave</h6> }
            </div>

            <div className="inline-flex mx-10">

              <AnimatePresence>
                { sidebarMinimized
                  ? (<>
                  <motion.span
                    initial={{ x: 20, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    exit={{ opacity: 0 }}
                    className="mx-2 my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                    </motion.span>
                    </>)

                  : (<><span className="mx-2 my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                    </span></>)

                  }
              </AnimatePresence>
              { ! sidebarMinimized && <h6 className="mx-5 text-white text-md">Claim</h6> }
            </div>
          </div>
        </aside>
      </div>

        </>
      }

      <div id="sidebarContainer" className="hidden md:block md:w-80">
        <aside className="relative h-full bg-purple-700 dark:bg-black">
          <div className="py-5 mx-5 cursor-pointer" onClick={() => setSidebarMinimized(! sidebarMinimized)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </div>
          <div className="flex flex-col pt-5 space-y-10">
            <div className="inline-flex mx-3">
              <AnimatePresence>
                { sidebarMinimized
                  ? (<>
                  <motion.span
                    initial={{ x: 20, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    exit={{ opacity: 0 }}
                    className="mx-2 my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </motion.span>
                    </>)

                  : (<><span className="mx-2 my-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </span></>)

                  }
              </AnimatePresence>

              { ! sidebarMinimized && <h6 className="mx-2 text-white text-md">Profile</h6> }
            </div>

            <div className="inline-flex mx-3">

              <AnimatePresence>
                { sidebarMinimized
                  ? (<>
                  <motion.span
                    initial={{ x: 20, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    exit={{ opacity: 0 }}
                    className="mx-2 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </motion.span>
                    </>)

                  : (<><span className="mx-2 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </span></>)

                  }
              </AnimatePresence>
              { ! sidebarMinimized && <h6 className="mx-2 text-white text-md">Dashboard</h6> }
            </div>

            <div className="inline-flex mx-3">

              <AnimatePresence>
                { sidebarMinimized
                  ? (<>
                  <motion.span
                    initial={{ x: 20, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    exit={{ opacity: 0 }}
                    className="mx-2 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </motion.span>
                    </>)

                  : (<><span className="mx-2 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </span></>)

                  }
              </AnimatePresence>
              { ! sidebarMinimized && <h6 className="mx-2 text-white text-md">Leave</h6> }
            </div>

            <div className="inline-flex mx-3">

              <AnimatePresence>
                { sidebarMinimized
                  ? (<>
                  <motion.span
                    initial={{ x: 20, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    exit={{ opacity: 0 }}
                    className="mx-2 my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                    </motion.span>
                    </>)

                  : (<><span className="mx-2 my-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                    </span></>)

                  }
              </AnimatePresence>
              { ! sidebarMinimized && <h6 className="mx-2 text-white text-md">Claim</h6> }
            </div>
          </div>
        </aside>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center w-full">
          <div className="w-full h-1/3">
            <nav className="flex items-center w-full h-16 bg-white border-b border-purple-800 shadow-lg shadow-2xl dark:bg-black">
              <img src="http://people.ixtelecom.net/img/logos/hrms-new.png" className="my-auto ml-5 w-7 h-7 md:w-10 md:h-10" alt=""/>

              <div className="flex mx-5 my-auto " >
                <div className="my-auto border-l border-gray-700 h-7"></div>
                <div className="mx-5 my-5 ">
                  <div className="cursor-pointer " onClick={() => setIsDarkMode(! isDarkMode)}>
                    { ! isDarkMode ? '🌙' : '☀️' }
                  </div>
                </div>
              </div>

              <div className="hidden ml-auto mr-5 -mx-2 md:inline-flex">
                <span className="mx-2 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                </span>
                <h6 className="mx-2 text-sm font-light text-gray-600 dark:text-white">Hi, Rizal Fakhri Maha Putra</h6>
              </div>

              <div className="inline-flex ml-auto mr-5 -mx-2 cursor-pointer md:hidden" onClick={() => setSidebarMinimized(! sidebarMinimized)}>
                <span className="mx-2 my-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </span>
              </div>

            </nav>
          </div>
          <div className="w-full">

            <main className="w-full h-full bg-gray-200 dark:bg-dark-gray-100">

              <div className="w-full bg-white h-80 lg:h-64 dark:bg-black">

                <div className="flex flex-row items-end justify-between px-5 py-10 md:px-10">

                  <div>
                    <h1 className="text-4xl font-bold text-gray-700 dark:text-white">Leave Application</h1>
                    <div className="flex items-center justify-between mt-5">
                      <div className="w-4 h-4 mr-2 text-gray-600 dark:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 32 32"
                            xmlSpace="preserve"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M31.106 15H3.278l8.325-8.293a.999.999 0 10-1.414-1.414l-9.9 9.899a1.01 1.01 0 000 1.414l9.9 9.9a.999.999 0 101.414-1.414L3.278 17h27.828a1 1 0 000-2z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                      </div>
                      <div className="w-full">
                        <p className="font-light text-gray-600 dark:text-white text-md">Back to HRMS Home</p>
                      </div>
                    </div>

                  </div>

                  <div className="hidden -mx-3 md:block">
                      <button className="px-10 py-3 mx-2 text-white bg-purple-800 border border-purple-800 rounded-lg shadow-2xl">Apply Leave</button>
                      <button className="px-10 py-3 mx-2 text-purple-800 bg-transparent border border-purple-800 rounded-lg shadow-2xl dark:text-white">Request Lieu</button>
                  </div>
                </div>

                <div className="flex justify-between mx-5 space-x-2 md:hidden">
                    <button className="px-10 py-3 text-sm text-left text-white bg-purple-800 border border-purple-800 rounded-lg shadow-2xl">Apply Leave</button>
                    <button className="px-10 py-3 text-sm text-purple-800 bg-transparent border border-purple-800 rounded-lg shadow-2xl dark:text-white">Request Lieu</button>
                </div>
              </div>

              <div className="mx-5 -mt-20 md:mx-10">

                <div className="w-full h-auto border border-purple-800 rounded shadow-2xl dark:bg-gray-300 bg-dark-gray-50">

                  <div className="p-5 pb-10">
                    <h6 className="text-xl font-bold text-gray-700">Leaves Entitled</h6>
                    <p className="mt-3 text-xs font-light text-gray-500">Your Leaves entitled for the whole year</p>

                    <div className="mt-5 -mx-4 grid grid-cols-1 md:grid-cols-4 gap-y-7">

                      <div className="mx-4">
                        <h6 className="text-gray-700 uppercase"><span className="font-bold">16</span> <span className="font-sm">/16</span></h6>
                        <h6 className="text-xs font-light text-gray-700 uppercase">Annual Leave</h6>
                        <div className="w-full h-1 mt-2 bg-purple-900 rounded-full"></div>
                      </div>

                      <div className="mx-4">
                        <h6 className="text-gray-700 uppercase"><span className="font-bold">16</span> <span className="font-sm">/16</span></h6>
                        <h6 className="text-xs font-light text-gray-700 uppercase">Medical Leave</h6>
                        <div className="w-full h-1 mt-2 bg-purple-900 rounded-full"></div>
                      </div>

                      <div className="mx-4">
                        <h6 className="text-gray-700 uppercase"><span className="font-bold">16</span> <span className="font-sm">/16</span></h6>
                        <h6 className="text-xs font-light text-gray-700 uppercase">Marriage Leave</h6>
                        <div className="w-full h-1 mt-2 bg-purple-900 rounded-full"></div>
                      </div>

                      <div className="mx-4">
                        <h6 className="text-gray-700 uppercase"><span className="font-bold">16</span> <span className="font-sm">/16</span></h6>
                        <h6 className="text-xs font-light text-gray-700 uppercase">Compassionate Leave</h6>
                        <div className="w-full h-1 mt-2 bg-purple-900 rounded-full"></div>
                      </div>

                      <div className="mx-4">
                        <h6 className="text-gray-700 uppercase"><span className="font-bold">16</span> <span className="font-sm">/16</span></h6>
                        <h6 className="text-xs font-light text-gray-700 uppercase">Annual Leave</h6>
                        <div className="w-full h-1 mt-2 bg-purple-900 rounded-full"></div>
                      </div>

                      <div className="mx-4">
                        <h6 className="text-gray-700 uppercase"><span className="font-bold">16</span> <span className="font-sm">/16</span></h6>
                        <h6 className="text-xs font-light text-gray-700 uppercase">Medical Leave</h6>
                        <div className="w-full h-1 mt-2 bg-purple-900 rounded-full"></div>
                      </div>

                      <div className="mx-4 ">
                        <h6 className="text-gray-700 uppercase"><span className="font-bold">16</span> <span className="font-sm">/16</span></h6>
                        <h6 className="text-xs font-light text-gray-700 uppercase">Marriage Leave</h6>
                        <div className="w-full h-1 mt-2 bg-purple-900 rounded-full"></div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>


              <div className="pb-10 mx-5 mt-10 md:mx-10">
                <div className="border border-purple-800 rounded shadow-2xl bg-dark-gray-50 dark:bg-gray-300">

                  <div className="flex flex-wrap items-center justify-between px-5 pt-5 space-y-2">
                    <h4 className="text-2xl font-bold text-gray-700 ">Leaves History</h4>
                    <input type="text" placeholder="Search Leave..." className="w-full h-12 px-3 py-2 text-xs font-light placeholder-black bg-white border-2 rounded appearance-none md:w-64 focus:border-blue-200 transition-all duration-200"/>
                  </div>

                  <div className="px-5 my-5">
                    <div className="w-full h-auto bg-white rounded">
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-7 space-y-5 md:space-y-0">
                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Leave Type</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">Annual Leave</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Date Applied</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">20/01/2021</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Day(s)</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">1</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">From</h6>
                              <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">20/01/2021</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">To</h6>
                              <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">20/01/2021</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Reason</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">Sick</h5>
                          </div>

                          <div className="w-1/2 my-auto md:ml-auto">
                            <div className="px-3 py-2 text-xs text-center text-green-600 bg-green-100 rounded-full">Approved</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 my-5">
                    <div className="w-full h-auto bg-white rounded">
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:space-y-0 space-y-5 md:grid-cols-7">
                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Leave Type</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">Medical Leave</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Date Applied</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">23/01/2021</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Day(s)</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">3</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">From</h6>
                              <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">20/01/2021</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">To</h6>
                              <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">20/01/2021</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Reason</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">Sick</h5>
                          </div>

                          <div className="w-1/2 my-auto md:ml-auto">
                            <div className="px-3 py-2 text-xs text-center text-blue-600 bg-blue-100 rounded-full">Reviewed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 my-5">
                    <div className="w-full h-auto bg-white rounded">
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-7 md:space-y-0 space-y-5">
                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Leave Type</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">Medical Leave</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Date Applied</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">23/01/2021</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Day(s)</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">3</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">From</h6>
                              <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">20/01/2021</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">To</h6>
                              <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">20/01/2021</h5>
                          </div>

                          <div>
                            <h6 className="text-xs font-light text-gray-500 font-inter">Reason</h6>
                            <h5 className="mt-1 text-sm font-light text-gray-700 font-inter">Sick</h5>
                          </div>

                          <div className="w-1/2 my-auto md:ml-auto">
                            <div className="px-3 py-2 text-xs text-center text-red-600 bg-red-100 rounded-full">Rejected</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </main>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
