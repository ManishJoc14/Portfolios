import React from "react";

export default function Hero() {
  return (
    <main className="container px-10 xl:px-0 mx-auto max-w-5xl flex flex-col gap-4 pt-20 xl:py-36">
      <p className="text-secondary text-lg font-thin">Hi, my name is</p>
      <h1 className=" text-5xl font-sans sm:text-6xl md:text-7xl text-indigo-200 font-bold -tracking-tight">
        Manish Joshi.
      </h1>
      <h1 className="text-4xl font-sans sm:text-5xl md:text-6xl text-slate-400 font-bold -tracking-wide">
        Engineering Digital Excellence.
      </h1>
      <p className="text-slate-400 font-sans max-w-xl text-md md:text-lg mt-2">
        With a focus on user accessibility and human-centered design, I bring
        innovation and expertise to every project. Join me on my journey as I
        create, code, and bring your digital dreams to life.
      </p>
      <button className="rounded-md text-wrap max-w-64 mt-8 border border-secondary p-4 px-6 text-sm tracking-wider text-secondary transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-primary-shadow">
        Checkout my projects!
      </button>
      <svg
        className="invert mt-16 animate-bounce"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={60}
      >
        <path
          d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
          stroke="#000000"
          strokeWidth="1"
        ></path>
        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
        <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
      </svg>
    </main>
  );
}
