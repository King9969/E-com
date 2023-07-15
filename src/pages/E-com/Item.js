import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file or API endpoint
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, []);
  console.log(products);
  return (
    <div className=" lg:p-20 py-20">
      {isLoading ? (
        <div className="flex justify-center mx-auto w-8">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      ) : (
        <div className="2xl:container 2xlx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
          <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
            {/* <!-- Description Div --> */}

            <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
              <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
                {products.title}
              </h2>

              <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
                {products.description}
              </p>
              <p className=" text-blue-800 font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
                $ {products.price}
              </p>

              <div className="lg:mt-11 mt-10">
                <div className="flex flex-row justify-between">
                  <p className=" font-medium text-base leading-4 text-gray-600">
                    Select quantity
                  </p>
                  <div className="flex">
                    <span
                      onClick={minusCount}
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                    >
                      -
                    </span>
                    <input
                      id="counter"
                      aria-label="input"
                      className="border border-gray-300 h-full text-center w-14 pb-1"
                      type="text"
                      value={count}
                      onChange={(e) => e.target.value}
                    />
                    <span
                      onClick={addCount}
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                    >
                      +
                    </span>
                  </div>
                </div>
                <hr className=" bg-gray-200 w-full my-2" />
                <div className=" flex flex-row justify-between items-center mt-4">
                  <p className="font-medium text-base leading-4 text-gray-600">
                    Dimensions
                  </p>
                  <svg
                    onClick={() => setRotate(!rotate)}
                    id="rotateSVG"
                    className={
                      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform " +
                      (rotate ? "rotate-180" : "rotate-0")
                    }
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <hr className=" bg-gray-200 w-full mt-4" />
              </div>
              <Link to={`/checkout/${products.price}`}>
                <button className=" rounded-lg focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-blue-600 w-full py-5 lg:mt-12 mt-6">
                  Checkout
                </button>{" "}
              </Link>
            </div>

            {/* <!-- Preview Images Div For larger Screen--> */}

            <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
              <div className="  lg:w-8/12  flex justify-center items-center ">
                <img src={String(products.image)} />
              </div>
              <div className=" lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                <div className=" flex justify-center items-center py-4 ">
                  <img
                    className="rounded"
                    src="https://picsum.photos/1000/1000?random=1"
                  />
                </div>
                <div className=" flex justify-center items-center py-4">
                  <img
                    className="rounded"
                    src="https://picsum.photos/1000/1000?random=12"
                  />
                </div>
                <div className=" flex justify-center items-center py-4">
                  <img
                    className="rounded"
                    src="https://picsum.photos/1000/1000?random=124"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
