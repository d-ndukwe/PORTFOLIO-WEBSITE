const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-indigo-600 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Let's build something together</h2>
      <p className="mb-8 opacity-90 max-w-lg mx-auto">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="mailto:your.ndukwedivinebball@gmail.com.com" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition">
          Email Me
        </a>
        <a href="https://wa.me/+2349083791229" className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition">
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;