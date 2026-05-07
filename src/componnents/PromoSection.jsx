export default function PromoSection() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-red-500 font-semibold mb-3 uppercase tracking-wider">
            New Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover Fashion That Matches Your Style
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Explore the latest trends with premium quality products at
            unbeatable prices. Upgrade your wardrobe with modern fashion.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-black text-white px-7 py-3 rounded-xl hover:bg-gray-800 transition duration-300">
              Shop Now
            </button>

            <button className="border border-black px-7 py-3 rounded-xl hover:bg-black hover:text-white transition duration-300">
              Explore
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            <div>
              <h2 className="text-3xl font-bold text-black">10K+</h2>
              <p className="text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black">500+</h2>
              <p className="text-gray-600">Premium Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black">4.9★</h2>
              <p className="text-gray-600">Ratings</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
            alt="fashion"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white p-5 rounded-2xl shadow-xl">
            <p className="text-gray-500 text-sm">Limited Offer</p>
            <h3 className="text-2xl font-bold text-black">50% OFF</h3>
            <p className="text-gray-600 text-sm mt-1">
              On selected products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}