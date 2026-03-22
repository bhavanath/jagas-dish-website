export default function HowItWorks() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#3A5A40]">
          How It Works
        </h2>

        <p className="text-gray-600 mt-4">
          Simple steps to stay consistent with your fitness diet
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          
          {/* Step 1 */}
          <div className="p-6 border rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#3A5A40]">
              1. Choose Your Goal
            </h3>
            <p className="text-gray-600 mt-2">
              Fat loss, muscle gain, or maintenance — we customize your meals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 border rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#3A5A40]">
              2. Get Your Meal Plan
            </h3>
            <p className="text-gray-600 mt-2">
              Weekly rotating menu with balanced nutrition and great taste.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 border rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#3A5A40]">
              3. Receive Meals Daily
            </h3>
            <p className="text-gray-600 mt-2">
              Freshly cooked meals delivered to your doorstep every day.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}