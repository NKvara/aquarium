import Input from "@/ui/input";
import {Element} from "react-scroll";

const Contact = () => {
  return (
    <Element
      name="contact"
      className="flex justify-center items-center pc:w-svw pc:h-svh bg-cover relative"
      style={{backgroundImage: "url(/aquarium/images/bgfish.jpg)"}}
    >
      <video
        className="absolute size-full object-cover bg-amber-200"
        src="/aquarium/images/fish.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute size-full bg-indigo-600 z-10 mix-blend-hue" />
      <div className="flex flex-col pc:flex-row gap-8 z-20 pc:max-w-pc w-full p-6 backdrop-blur-lg mx-2 my-10 pc:m-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d22520052.47469811!2d-139.68416426203632!3d-46.4481057125752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDUyJzM2LjAiUyAxMjPCsDIzJzM2LjAiVw!5e0!3m2!1sen!2sge!4v1745165327537!5m2!1sen!2sge"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-52 pc:h-auto pc:w-1/2"
        />
        <div className="pc:w-1/2 flex flex-col gap-4 text-neutral-100">
          <h1 className="font-title text-4xl pc:text-5xl mb-2 pc:mb-4">
            Contact Us
          </h1>
          <Input label="Name" />
          <Input label="Email" />
          <Input label="Question" />
          <button className="mt-6 pc:mt-12 bg-neutral-100 hover:bg-neutral-200 transition cursor-pointer text-lg py-2 w-full text-black rounded-sm">
            Send
          </button>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
