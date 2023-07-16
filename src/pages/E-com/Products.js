import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Product = () => {
  const [cartp, setCartp] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(200);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterProducts = () => {
    return products.filter(
      (product) =>
        product.price <= maxPrice &&
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const removeItemById = (id) => {
    let updatedProducts = cartp.filter((e) => e.id !== id);
    setCartp(updatedProducts);
  };

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="bg-gray-900 text-center lg:py-10 md:py-8 py-6">
        <p className="m-20 w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-200">
          Let's Shop
        </p>
      </div>
      <div className="py-10 lg:px-40 md:px-6 px-4">
        {isLoading ? (
<div className="w-full h-20 border-l-2 border-[#1a5cff] rounded-full animate-spin" />
        ) : (
          <>
            <div className="flex justify-between max-md:flex-col">
              <div className="relative py-6 w-1/3 max-md:w-full ">
                <label htmlFor="Search" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border-gray-400 py-2.5 p-10 shadow-md sm:text-sm"
                />
                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              <div className="mb-4 relative w-1/3 max-md:w-full ">
                <label
                  htmlFor="customRange1"
                  className="mb-2 inline-block text-gray-90"
                >
                  Price Range
                </label>
                <div className="flex justify-between">
                  <p>$0</p> <p>$200</p>
                </div>
                <input
                  type="range"
                  className="w-full bg-blue-500"
                  id="customRange1"
                  min={0}
                  max={200}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-10 bg-white px-2 py-1 rounded text-gray-800">
                  $ {maxPrice}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-16 sm:p-10 sm:gap-x-6 gap-y-6 lg:p-2 mt-12 mt-10">
              {filterProducts().map((product) => (
                <div key={product.id}>
                  <div className="relative group">
                    <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <img
                      className="h-60 mx-auto"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => {
                          openCart();
                          setCartp((prevCart) => [...prevCart, product]);
                        }}
                        className="rounded font-medium text-base leading-4 text-gray-200 bg-blue-600 py-3 w-full"
                      >
                        Add to Cart
                      </button>
                      <Link to={String(product.id)}>
                        <button className="rounded bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                  <p className="text-center  font-medium text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                    {product.title}
                  </p>
                  <p className="text-blue-800 text-center font-semibold text-2xl leading-5  mt-4">
                    $ {product.price}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
        <Cart
          open={isCartOpen}
          onClose={closeCart}
          cartp={cartp}
          removeItemById={removeItemById}
        />
        <div className="flex justify-center items-center">
          <button
            className="rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4"
            onClick={openCart}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ open, onClose, cartp, removeItemById }) => {
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (let i = 0; i < cartp.length; i++) {
      subtotal += cartp[i].price;
    }
    return subtotal.toFixed(2);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={onClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartp.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>
                                          {product.title}
                                        </a>
                                      </h3>
                                      <p className="ml-4">${product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <button
                                      onClick={() => removeItemById(product.id)}
                                      type="button"
                                      className="font-medium transition text-white bg-red-600  p-2 rounded hover:text-blue-600 hover:bg-white"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${calculateSubtotal()}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          to={`/checkout/${calculateSubtotal()}`}
                          className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-blue-600"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Product;
