import { Accordion } from "flowbite-react";
import React from "react";


const Blog = () => {
  return (
    <div className="mt-10">
          <section class="text-gray-600 body-font">
              <div className='mx-10'>
                  <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Blog Section</h1>
                  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                      <div class="p-4 md:w-1/3 flex">
                          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                              </svg>
                          </div>
                          <div class="flex-grow pl-6">
                              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">what is cors?</h2>
                              <p class="leading-relaxed text-base">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                          </div>
                      </div>
                      <div class="p-4 md:w-1/3 flex">
                          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                  <circle cx="6" cy="6" r="3"></circle>
                                  <circle cx="6" cy="18" r="3"></circle>
                                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                              </svg>
                          </div>
                          <div class="flex-grow pl-6">
                              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Why are you using firebase? What other options do you have to implement authentication?</h2>
                              <p class="leading-relaxed text-base">The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                          </div>
                      </div>
                      <div class="p-4 md:w-1/3 flex">
                          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                          </div>
                          <div class="flex-grow pl-6">
                              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">How does the private route work?</h2>
                              <p class="leading-relaxed text-base">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                          </div>
                      </div>
                      <div class="p-4 md:w-1/3 flex">
                          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                          </div>
                          <div class="flex-grow pl-6">
                              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">What is Node? How does Node work?</h2>
                              <p class="leading-relaxed text-base">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  );
};

export default Blog;
