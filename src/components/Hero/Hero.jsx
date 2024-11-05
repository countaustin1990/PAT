import { Link } from "react-router-dom";
//import pattyImage from "../../assets/patty.jpg";
import HeroPic from "../../assets/Heropic.jpg";

export default function Hero() {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };
  return (
    <div className="bg-blue-200">
      <div className="mx-auto max-w-9xl max-h-9x1 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-red-500 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#custom-gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="custom-gradient">
                <stop stopColor="white" />
                <stop offset="0.5" stopColor="yellow" />
                <stop offset={1} stopColor="red" />
              </radialGradient>
            </defs>
          </svg>

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A Taste of Delight
              <br />
              A Taste of PayPay cooking.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              We prepare the best meals with great taste. What are you waiting for? Try us today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/products"
                onClick={scrollToTop} 
                className="bg-gradient-to-r from-gray-700 to-gray-500 px-3.5 rounded-lg py-2.5 text-sm font-semibold text-gray-200 shadow-sm hover:from-blue-600 hover:to-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Check Menu
              </Link >
             {/* <Link to="/"
              onClick={scrollToTop}
               className="text-sm font-semibold leading-6 text-white" >
                Learn more <span aria-hidden="true">→</span>
              </Link>*/}
            </div>
          </div>
          <div className="relative mt-16 h-90 lg:mt-8">
            <img
              alt="Patty dish"
              src={HeroPic}
              width={500}
              height={500}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
