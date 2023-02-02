import Link from 'next/link';

interface Props {
  backgroundImage: string;
  header: string;
  message: string;
  buttonText: string;
  buttonLink?: string;
  showButton: boolean;
}

const Hero = ({ backgroundImage, header, message,showButton, buttonText, buttonLink = '/' }: Props) => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-3xl font-bold text-white">{header}</h1>
      <p className="text-xl text-white">{message}</p>
      {showButton && (
      <Link href={buttonLink}>
        <div className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
          {buttonText}
        </div>
      </Link>
        )}
    </div>
  );
};

export default Hero;
