import Link from 'next/link';

interface Props {
  backgroundImage: string;
  header: string;
  message: string;
  buttonText: string;
  buttonLink?: string;
  showButton: boolean;
  height?: string;
}

const Hero = ({ backgroundImage, header, message,showButton, buttonText, buttonLink = '/', height = '80' }: Props) => {
  return (
    <div
      className={`bg-cover  h-${height} bg-top flex flex-col items-center justify-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-3xl p-24 font-sans italic text-white">{header}</h1>
      <p className="text-xl text-white">{message}</p>
      {showButton && (
      <Link href={buttonLink}>
        <div className='px-8 text-white py-2 border'>
          {buttonText}
        </div>
      </Link>
        )}
    </div>
  );
};

export default Hero;
