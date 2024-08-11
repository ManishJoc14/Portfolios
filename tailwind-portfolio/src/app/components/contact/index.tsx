import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="container my-32 xl:my-36 mx-auto p-8 max-w-4xl"
      >
        <div className="flex flex-col text-xl gap-4 items-center">
          <div className="flex w-full items-center gap-6">
            <hr className="w-full" />
            <span className="text-nowrap text-secondary">03. Contact Me</span>
            <hr className="w-full" />
          </div>
          <h1 className="text-violet-200 font-sans font-extrabold text-4xl md:text-5xl tracking-wider mt-12 mb-4">
            Get In Touch
          </h1>
          <p className="text-center max-w-xl leading-relaxed tracking-wide text-slate-400 text-lg font-sans">
            While I&apos;m actively exploring new opportunities, my inbox is
            always open. Whether you have a question, a potential collaboration,
            or just want to say hi, I welcome your message and will do my best
            to respond promptly!
          </p>

          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manishjoc14@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md w-max border border-secondary p-4 px-6 text-sm tracking-wider text-secondary transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-primary-shadow mx-auto mt-12"
          >
            Say Hello
          </Link>
        </div>
      </div>
    </>
  );
}
