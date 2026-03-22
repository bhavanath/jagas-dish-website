export default function Hero() {
  return (
    <section className="bg-[#DAD7CD] py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div className="space-y-6">
  <h1 className="text-4xl md:text-6xl font-extrabold text-[#2F3E2E] leading-tight tracking-tight">
    Healthy Food That <br /> Actually Tastes Good
  </h1>

  <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
    Fresh, high-protein meals designed for fat loss and muscle gain.
    Delivered daily in your area.
  </p>

  {/* CTA BUTTONS */}
  <div className="flex flex-col sm:flex-row gap-4">
    
    {/* WhatsApp */}
    <a
      href="https://wa.me/919176278769"
      target="_blank"
    className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"    >
      Order on WhatsApp
    </a>

    {/* Call */}
    <a
      href="tel:9176278769"
    className="border border-[#3A5A40] text-[#3A5A40] px-6 py-3 rounded-xl hover:bg-[#3A5A40] hover:text-white hover:scale-[1.02] transition-all duration-200"    >
      Call Now
    </a>

  </div>
</div>

        {/* RIGHT */}
        <img
  src="/food.jpg"
  alt="Healthy Meal"
  className="w-full h-[350px] object-cover rounded-3xl shadow-xl"
/>

      </div>
    </section>
  );
}