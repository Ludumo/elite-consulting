import Hero from '../components/Hero'

function about() {
  return (
    <div>
        <Hero backgroundImage={'https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/cape-flats-1256x942.jpg'} 
              header={'ABOUT US'} 
              message={'Putting the peoples needs first!'} 
              buttonText={''} 
              showButton={false}
        />
          <p className='flex justify-center text-l pb-10 pt-12 mx-auto  font-light text-center'>
            Elite Consulting, established in 2007, offers a hands-on, 
            holistic approach to the built and engineering environment, 
            combining expertise in facilitation, organization development, 
            management consulting, building and material supply, as well as property development. 
            We have extensive experience in conducting public participation processes, 
            surveying needs and perceptions, 
            and facilitating strategic management workshops while imparting skills to participants. 
            With nearly two decades of experience, 
            We have helped emerging entrepreneurs enhance their local economic participation 
            in the construction and infrastructure development industry. 
            Our unique approach to partnering with clients offers intrinsic value to their human resource development plans. 
          </p>
      </div>
  )
}

export default about