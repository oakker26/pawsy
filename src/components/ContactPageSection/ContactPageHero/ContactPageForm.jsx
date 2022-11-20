import React from 'react'

const ContactPageForm = () => {
  return (
    <div className="bg-white p-8 rounded-2xl ">
    <div className="grid md:grid-cols-2  md:gap-y-2 md:gap-x-4">
      <div className="md:w-[95%] w-full col-span-2 md:col-span-1">
        <label htmlFor="name">Full Name*</label>
        <input
          type="text"
          placeholder="Full Name"
          class="mt-1 block w-full h-11 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-purple-500 focus:border-[0.2px] focus:ring-1 focus:ring-blue-700
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
"
        />
      </div>
      <div className="md:w-[95%] w-full col-span-2 md:col-span-1">
        <label htmlFor="name">Email*</label>
        <input
          type="email"
          placeholder="Email"
          class="mt-1 block w-full h-11 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-purple-500 focus:border-[0.2px] focus:ring-1 focus:ring-blue-700
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
"
        />
        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          valid email address
        </p>
      </div>
      <div className="md:w-[95%] w-full col-span-2 md:col-span-1">
        <label htmlFor="name">Phone Number*</label>
        <input
          type="number"
          placeholder="(95)092-4345"
          className="mt-1 font-[montserrat] block w-full h-11 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-purple-500 focus:border-[0.2px] focus:ring-1 focus:ring-blue-700
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
invalid:border-pink-500 invalid:text-pink-600
focus:invalid:border-pink-500 focus:invalid:ring-pink-500
"
        />
      </div>
      <div class="md:w-[95%] w-full col-span-2 md:col-span-1">
        <label class="" for="grid-state">
          Service*
        </label>
        <div class="relative">
          <select class="block appearance-none w-full  border text-gray-700 h-12 bg-white rounded-md px-3 py-2   leading-tight focus:outline-none focus:border-purple-500 focus:ring-blue-700 focus:bg-white">
            <option>Select One...</option>
            <option>First Choice</option>
            <option>Second Choice</option>
            <option>Third Choice</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className=' col-span-2 '>
      <label for="message" class="block mb-2 mt-6 ">Message</label>
      <textarea id="message" rows="4" class="block px-4 py-2 w-full  bg-white rounded-md border-[1px] focus:ring-blue-700 focus:outline-none focus:border-purple-500 min-h-[150px]" placeholder="Leave your message"></textarea>

      </div>
      <button className='primaryBtn'> Make an Appointment</button>
    </div>
  </div>
    )
}

export default ContactPageForm