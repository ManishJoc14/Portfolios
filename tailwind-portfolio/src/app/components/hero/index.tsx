import React from "react";

export default function Hero() {
  return (
    <main className="container px-10 xl:px-0 min-h-screen mx-auto max-w-5xl flex flex-col gap-4  pt-16 xl:pt-32">
      <p className="text-secondary text-lg font-thin">Hi, my name is</p>
      <h1 className=" text-5xl font-sans sm:text-6xl md:text-7xl text-indigo-200 font-bold -tracking-tight">
        Manish Joshi.
      </h1>
      <h1 className="text-4xl font-sans sm:text-5xl md:text-6xl text-slate-400 font-bold -tracking-wide">
        Engineering Digital Excellence.
      </h1>
      <p className="text-slate-400 font-sans max-w-xl text-lg mt-2">
        With a focus on user accessibility and human-centered design, I bring
        innovation and expertise to every project. Join me on my journey as I
        create, code, and bring your digital dreams to life.
      </p>
      <button className="rounded-md w-max mt-8 border border-secondary p-4 px-6 text-sm tracking-wider text-secondary transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-primary-shadow">
        Checkout my projects!
      </button>
    </main>
  );
}
