export default function Footer() {
  return (
    <footer className="bg-[#3A5A40] text-white py-10 px-6 md:px-12 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">Jaga’s Dish</h2>
          <p className="text-gray-200 mt-2">
            Healthy meals designed for your fitness journey.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-gray-200 mt-2">Phone: +91 9176278769</p>
          <p className="text-gray-200">WhatsApp: +91 9176278769</p>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold">Service Area</h3>
          <p className="text-gray-200 mt-2">
            Pammal, Chromepet & Nearby Areas
          </p>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-300 mt-8 text-sm">
        © {new Date().getFullYear()} Jaga’s Dish. All rights reserved.
      </div>
    </footer>
  );
}