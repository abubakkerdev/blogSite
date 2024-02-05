import React from 'react'

const DashBoard = () => {
  return (
    <div>
      <section class="px-4 py-8 leading-6 text-gray-700 sm:px-6 lg:px-8">
        <div
          class="w-full mx-auto duration-500 ease-in-out transform max-w-screen-3xl"
          data-class-toggler-target="toggleable"
        >
          <div class="relative">
            <div
              class="overflow-hidden shadow-xl rounded-xl "
              style="transform-origin: right center;"
            >
              <div class="flex items-center pl-3 space-x-1 bg-gray-200 rounded-t-xl h-7">
                <span class="w-2 h-2 bg-white rounded-full">dasda</span>
                <span class="w-2 h-2 bg-white rounded-full"></span>
                <span class="w-2 h-2 bg-white rounded-full"></span>
              </div>
              <iframe
                class="rounded-b-xl w-full align-middle h-[calc(100vh_-_10.75rem)]"
                frameborder="0"
                scrolling="yes"
                src="https://davidgrzyb.github.io/tailwind-admin-template/"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashBoard