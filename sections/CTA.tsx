export default function CTA() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-[#3A5A40] text-center text-white">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Diet Today
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-200">
          Take the first step towards a healthier lifestyle with meals that
          actually taste good.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">

          {/* WhatsApp */}
          <a
            href="https://wa.me/919176278769"
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition"
          >
            Order on WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:9176278769"
            className="border border-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-[#3A5A40] transition"
          >
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}