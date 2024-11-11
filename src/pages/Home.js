import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  window.scrollTo(0, 0);
  return (
    <section className="bg-gray-900 text-gray-100 overflow-hidden">
      <Intro />
      <Rcontent />
      <Content />
      <Step />
      <Pricing />
      <Lower />
    </section>
  );
}

const Intro = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Users
        </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ndo eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-gray-100 hover:bg-transparent hover:text-gray-100 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/get-started"
          >
            Get Started
          </a>

          <a
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

const Step = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-800 uppercase rounded-full bg-white">
            Brand new
          </p>
        </div>
        <div
          data-aos="fade"
          data-aos-offset="200"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit accusantium
            doloremque do eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Step 1</p>
              <svg
                className="w-6 text-blue-600  transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-400">
              If one examines precultural libertarianism, one is faced with a
              choice: either accept rationalism or conclude that context.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Step 2</p>
              <svg
                className="w-6 text-blue-600 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-400">
              That is the true genius of America - a faith in simple dreams, an
              insistence on small miracles.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Step 3</p>
              <svg
                className="w-6 text-blue-600 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Those options are already baked in with this model shoot me an
              email clear blue water but we need distributors.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="400"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Success</p>
              <svg
                className="w-8 text-blue-600"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Lookout flogging bilge rat main sheet bilge water nipper fluke to
              go on account heave down clap of thunder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Pricing = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {" "}
      <div
        data-aos="fade"
        data-aos-offset="200"
        data-aos-easing="ease-in"
        data-aos-duration="600"
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase rounded-full bg-white">
              Our Pricing
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Transparent</span>
            </span>{" "}
            pricing. Pay as you grow.
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit accusantium
            doloremque do eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-blue-900 border border-blue-600 rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center text-gray-200">
              <div className="text-lg font-semibold">Start</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">Free</div>
              </div>
              <div className="mt-2 space-y-3">
                <div>10 deploys per day</div>
                <div>10 GB of storage</div>
                <div>20 domains</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Start for free
              </a>
              <p className="max-w-xs mt-6 text-xs text-gray-400 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                Sed ut unde omnis iste natus accusantium doloremque.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-down"
          data-aos-offset="200"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
            <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
              <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-blue-600">
                Most Popular
              </div>
            </div>
            <div className="text-center text-black">
              <div className="text-lg font-semibold">Pro</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">$38</div>
                <div>/ mo</div>
              </div>
              <div className="mt-2 space-y-3">
                <div>200 deploys per day</div>
                <div>80 GB of storage</div>
                <div>Global CDN</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className=" bg-blue-600 inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-gray-900  first-letter:focus:shadow-outline focus:outline-none"
              >
                Buy Pro
              </a>
              <p className="max-w-xs mt-6 text-xs text-gray-400 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                Sed ut unde omnis iste natus accusantium doloremque.
              </p>
            </div>
          </div>
        </div>{" "}
        <div
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div className=" border-blue-600 flex flex-col justify-between p-8 transition-shadow duration-300 bg-blue-900 border rounded shadow-sm sm:items-center hover:shadow">
            <div className="text-center text-gray-200">
              <div className="text-lg text-white font-semibold">Business</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">$78</div>
                <div>/ mo</div>
              </div>
              <div className="mt-2 space-y-3">
                <div>500 GB of storage</div>
                <div>Unlimited domains</div>
                <div>24/7 Support</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Buy Business
              </a>
              <p className="max-w-xs mt-6 text-xs text-gray-400 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                Sed ut unde omnis iste natus accusantium doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Lower = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
      <div data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="300">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase rounded-full bg-white">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit accusantium
            doloremque do eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            placeholder="Email"
            required=""
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-600 hover:bg-white hover:text-blue-600 focus:shadow-outline focus:outline-none"
          >
            Subscribe
          </button>
        </form>
        <p className="max-w-md mb-10 text-xs text-gray-400 sm:text-sm md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit accusantium
          doloremque laudantium.
        </p>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-in"
        data-aos-duration="600"
      >
        <img
          src="https://kitwind.io/assets/kometa/half-phone.png"
          className="  w-full mx-auto md:w-auto md:max-w-xs"
          alt=""
        />
      </div>
    </div>
  );
};

export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div className="flex py-20 flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg max-md:py-2">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Lorem ipsum dolor sit amet,
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            >
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
          <div className="px-3">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Rcontent = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="600"
          >
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
          <div className="flex flex-col items-end px-3">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            >
              <img
                className="object-cover relative lg:-inset-x-28 mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
          <div className="px-3"></div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div className="flex py-20 flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg max-md:py-2">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Lorem ipsum dolor sit amet,
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
