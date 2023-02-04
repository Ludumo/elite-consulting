import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Link from 'next/link'

function about() {
  return (
    <div>
        <Hero backgroundImage={'https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Klipfontein+Corridor.jpg'} 
              header={'OUR VALUES'} 
              message={''} 
              buttonText={''} 
              showButton={false}
              height="80"
              backgroundPosition="center"
        />
          <section className='p-8'>
              <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 :bg-gray-800">
                  <div className="flex flex-wrap -mx-8">
                      <div className="w-full px-8 lg:w-1/2">
                          <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                              <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading :text-white uppercase">
                                  What drives us
                              </h2>
                              <p className="mb-8 leading-loose text-gray-500 :text-gray-300">
                              Our goal is to convert low-income neighborhoods into secure and environmentally responsible areas. To achieve this, barriers to economic, social, cultural, and institutional equality must be addressed.
                              </p>
                              <div className="w-full md:w-1/3">
                                <Link href={'/projects'} >
                                  <button 
                                        type="button" 
                                        className="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                      See more
                                  </button>
                                </Link>
                              </div>
                          </div>
                      </div>
                      <div className="w-full px-8 lg:w-1/2">
                          <ul className="space-y-12">
                              <li className="flex -mx-4">
                                  <div className="px-4">
                                      <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-green-700 rounded-full font-heading bg-green-70">
                                          1
                                      </span>
                                  </div>
                                  <div className="px-4">
                                      <h3 className="my-4 text-xl font-semibold :text-white">
                                      Public Participation & Facilitation 

                                      </h3>
                                      <p className="leading-loose text-gray-500 :text-gray-300">
                                      Facilitation of an Inclusive Integrated Construction process, using EPWP Principles
                                      </p>
                                  </div>
                              </li>
                              <li className="flex -mx-4">
                                  <div className="px-4">
                                      <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-green-700 rounded-full font-heading bg-green-70">
                                          2
                                      </span>
                                  </div>
                                  <div className="px-4">
                                      <h3 className="my-4 text-xl font-semibold :text-white">
                                      Participatory Monitoring and Evaluation

                                      </h3>
                                      <p className="leading-loose text-gray-500 :text-gray-300">
                                      A participatory approach to strategic management through community management and facilitation.
                                      </p>
                                  </div>
                              </li>
                              <li className="flex -mx-4">
                                  <div className="px-4">
                                      <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-green-700 rounded-full font-heading bg-green-70">
                                          3
                                      </span>
                                  </div>
                                  <div className="px-4">
                                      <h3 className="my-4 text-xl font-semibold :text-white">
                                      Research and Needs Assessment

                                      </h3>
                                      <p className="leading-loose text-gray-500 :text-gray-300">
                                      Enabling evidence-led development processes, capacity building, knowledge sharing,
                                       and replication of proven processes through facilitation and participation describes research.
                                      </p>
                                  </div>
                              </li>
                          
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
          <Footer />
      </div>
  )
}

export default about