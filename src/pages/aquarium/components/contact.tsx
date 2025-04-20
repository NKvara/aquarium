import Input from "@/ui/input";
import {Element} from "react-scroll";

const Contact = () => {
  return (
    <Element
      name="contact"
      className="flex justify-center items-center w-svw h-svh bg-cover"
      style={{backgroundImage: "url(/aquarium/images/bgfish.jpg)"}}
    >
      <video
        className="absolute size-full object-cover"
        src="/aquarium/images/fish.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="" />
      <div className="flex gap-8 z-10 pc:max-w-pc w-full p-6 backdrop-blur-lg rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d22520052.47469811!2d-139.68416426203632!3d-46.4481057125752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDUyJzM2LjAiUyAxMjPCsDIzJzM2LjAiVw!5e0!3m2!1sen!2sge!4v1745165327537!5m2!1sen!2sge"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-1/2"
        />
        <div className="w-1/2 flex flex-col gap-4 text-neutral-100">
          <h1
            className="font-title text-transparent text-5xl mb-4"
            style={{WebkitTextStroke: "1.5px white"}}
          >
            Contact Us
          </h1>
          <Input label="Name" />
          <Input label="Email" />
          <Input label="Question" />
          <button className="mt-12 bg-neutral-900/80 hover:bg-neutral-800/80 transition cursor-pointer text-lg py-2 w-full rounded-lg">
            Send
          </button>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
