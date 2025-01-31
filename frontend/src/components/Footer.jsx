import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col items-center bg-gradient-to-b from-gray-700 to-gray-600 text-white dark:bg-gray-900 dark:text-gray-200 lg:text-left">
        <div className="container max-w-7xl py-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div>
              <h5 className="mb-4 text-lg font-bold text-yellow-300">About</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#!" className="hover:text-yellow-400">
                    Sri Lanka Travel
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-yellow-400">
                    National Holiday Resort
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-yellow-400">
                    Tourism Awards
                  </a>
                </li>
              </ul>
            </div>


            <div className="">
              <img
                src="/images-removebg-preview.png"
                alt="Sri Lanka Tourism"
                className="w-90 h-50 rounded-lg shadow-md"
              />
            </div>


            <div className="flex flex-col">
              <h5 className="mb-4 text-lg font-bold text-yellow-300">
                Sri Lanka Tourism
              </h5>
              <p className="mb-6">
                Sri Lanka Tourism Development Authority
                <br />
                No. 80, Galle Road, <br />
                Colombo 03
              </p>
              <h5 className="mb-2 text-lg font-bold text-yellow-300">
                Telephone
              </h5>
              <p className="mb-6">
                +94 112 696869 / +94 412 422920
                <br />
                +92 112 426202
              </p>
            </div>

            <div>
              <div className="flex gap-2 mb-4 items-center">
                <FaFacebook className="text-blue-500 text-lg" />
                <a href="#!" className="hover:text-blue-300">
                  Facebook
                </a>
              </div>
              <div className="flex gap-2 mb-4 items-center">
                <FaInstagram className="text-pink-500 text-lg" />
                <a href="#!" className="hover:text-pink-300">
                  Instagram
                </a>
              </div>
              <div className="flex gap-2 mb-6 items-center">
                <FaTwitter className="text-blue-400 text-lg" />
                <a href="#!" className="hover:text-blue-200">
                  Twitter
                </a>
              </div>

              <h5 className="mb-2 text-lg font-bold text-yellow-300">Fax</h5>
              <p className="mb-6">
                +94 112 444165 / 2426984
              </p>

              <h5 className="mb-2 text-lg font-bold text-yellow-300">E-mail</h5>
              <p className="mb-6">
                <a href="mailto:info@srilanka.travel" className="hover:text-yellow-400">
                  info@srilanka.travel
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-700 p-4 text-center text-sm text-gray-300">
          © 2025 Sri Lanka Tourism. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
