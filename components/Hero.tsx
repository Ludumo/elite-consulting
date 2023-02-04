import Link from 'next/link';

interface Props {
  backgroundImage: string;
  backgroundPosition: string;
  header: string;
  message: string;
  buttonText: string;
  buttonLink?: string;
  showButton: boolean;
  height?: string;
}

const Hero = ({ backgroundImage, header, message,showButton, backgroundPosition = 'center', buttonText, buttonLink = '/', height = '80' }: Props) => {
  return (
    <div
      className={`bg-cover  h-${height} bg-${backgroundPosition} flex flex-col items-center justify-center `}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">

      <h2 className="text-2xl h-32 w-60 md:w-80 font-bold dark:text-white sm:text-4xl">{header}</h2>
      </div>
      <p className="text-xl text-white">{message}</p>
      {showButton && (
      <Link className='p-24' href={buttonLink}>
        <div className='py-4 px-6  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>
          {buttonText}
        </div>
      </Link>
        )}
    </div>
  );
};

export default Hero;
