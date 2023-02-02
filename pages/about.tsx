import Hero from '../components/Hero'
import Footer from '../components/Footer'

function about() {
  return (
    <div>
        <Hero backgroundImage={'https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Klipfontein+Corridor.jpg'} 
              header={''} 
              message={''} 
              buttonText={''} 
              showButton={false}
              height="80"
        />
        <h2 className='flex text-xl justify-center'>ABOUT US</h2>
          <p className='flex justify-center text-l p-10 mx-auto  font-light text-center'>
            Elite Consulting, founded in 2007, offers a comprehensive and hands-on approach
             to the built and engineering environment, combining expertise in facilitation, 
             organization development, management consulting, building and material supply,
              as well as property development. With nearly two decades of experience, 
              we bring extensive knowledge to the table, having helped entrepreneurs 
              improve their local economic participation in the construction and infrastructure development industry.
               Our approach includes conducting public participation processes, 
               surveying needs and perceptions, and facilitating strategic management
                workshops while imparting essential skills to participants. 
                Our unique partnership approach provides intrinsic value to clients' 
                human resource development plans.
          </p>
          <Footer />
      </div>
  )
}

export default about