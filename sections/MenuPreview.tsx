export default function MenuPreview() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#3A5A40]">
          Weekly Menu Highlights
        </h2>

        <p className="text-gray-600 mt-4">
          Delicious meals planned to keep your diet exciting
        </p>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Item 1 */}
          <div className="bg-[#DAD7CD] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <img
              src="/food.jpg"
              alt="Chicken Tikka Meal"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#3A5A40]">
                Chicken Tikka + Rice
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                High protein meal with balanced carbs
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-[#DAD7CD] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <img
              src="/food.jpg"
              alt="Grilled Chicken"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#3A5A40]">
                Grilled Chicken + Veggies
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Lean protein with fiber-rich vegetables
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-[#DAD7CD] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <img
              src="/food.jpg"
              alt="Burrito Bowl"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#3A5A40]">
                Burrito Bowl
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Flavor-packed meal with protein and healthy fats
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}