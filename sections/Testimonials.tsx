export default function Testimonials() {
  const reviews = [
    {
      text: "Man... presentation 5/5 (proud of you!) Taste 10/5. Keep it going....",
      name: "Maha",
    },
    {
      text: "Super and diet friendly for weight watchers!! especially Antha Yogurt sauce than blast",
      name: "Pavithra",
    },
    {
      text: "It was so delicious. Looks wise it was very tempting and colorful, the veggies were very fresh...",
      name: "Supraja",
    },
    {
      text: "OMG! Jagga Master, you deserve the maximum star... Healthy meal and amazing consistency!",
      name: "Prabha Iyer",
    },
    {
      text: "Really enjoyed the Protein Bowl! Fresh, well-balanced, and packed with nutrients.",
      name: "Geetha Rajesh",
    },
    {
      text: "Surprisingly delicious! Far from bland diet food. Perfect for tracking diet easily.",
      name: "Naveen Loganathan",
    },
    {
      text: "Bro that's wonderful! It's always a win when the whole family loves it.",
      name: "Reshma",
    },
    {
      text: "Food was delicious. I really enjoyed. Thanks bro!",
      name: "Vinay",
    },
    {
      text: "Taste was exquisite! Light, less oily, and very satisfying.",
      name: "Ramesh",
    },
  ];

  return (
    <section className="py-20 bg-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          What Our Clients Say
        </h2>

        {/* Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
          <div className="flex gap-6 md:contents">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition flex flex-col min-w-[300px] md:min-w-0 snap-center"
            >
              {/* Stars */}
              <div className="mb-4 text-yellow-500 text-lg">★★★★★</div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {review.text}
              </p>

              {/* Name */}
              <p className="font-semibold text-right text-gray-900 mt-auto">
                - {review.name}
              </p>
            </div>
          ))}
        </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500 md:hidden">
            ← Swipe →
        </div>
      </div>
    </section>
  );
}