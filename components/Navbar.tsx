export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-white border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-center">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-4">
          
          {/* Logo */}
          <img
            src="/logo.jpg"
            alt="Jaga's Dish Logo"
            className="h-14 md:h-24 w-14 md:w-24 object-cover rounded-full shadow-md"
          />

          {/* Brand Name */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2F3E2E] tracking-tight font-[var(--font-playfair)]">
            Jaga’s Dish
          </h1>

        </div>

      </div>

    </nav>
  );
}