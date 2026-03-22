export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-[#DAD7CD]">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#3A5A40]">
          Why Choose Jaga’s Dish
        </h2>

        <p className="text-gray-700 mt-4">
          Designed to support your fitness journey with the right nutrition
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* Card 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#3A5A40]">
              High Protein Meals
            </h3>
            <p className="text-gray-600 mt-2">
              Meals crafted to support muscle growth and fat loss.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#3A5A40]">
              Supports Muscle Recovery
            </h3>
            <p className="text-gray-600 mt-2">
              Balanced nutrition to help your body recover after workouts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#3A5A40]">
              Rich in Nutrients
            </h3>
            <p className="text-gray-600 mt-2">
              Packed with essential vitamins and minerals for overall health.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-[#3A5A40]">
              Sustained Energy
            </h3>
            <p className="text-gray-600 mt-2">
              Stay energized throughout the day without unhealthy cravings.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}