import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-20">
      
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          About <span className="text-blue-600">Salva</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          Welcome to Salva — your trusted online shopping destination.
          We provide trendy, affordable, and high-quality products for
          everyone. Our mission is to make online shopping simple,
          secure, and enjoyable.
        </p>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
        
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="About Salva"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            Salva is an eCommerce platform created to provide customers
            with the latest fashion, electronics, accessories, and daily
            essentials at affordable prices.
          </p>

          <p className="text-gray-600 leading-7 mb-4">
            We focus on product quality, fast delivery, secure payment,
            and customer satisfaction. Our goal is to become one of the
            most trusted online stores in India.
          </p>

          <p className="text-gray-600 leading-7">
            Whether you are shopping for fashion, gadgets, or home
            products, Salva offers a smooth and easy shopping experience.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and reliable delivery service across India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-semibold mb-2">
              Secure Payment
            </h3>
            <p className="text-gray-600">
              100% secure payment methods for safe shopping.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">
              Quality Products
            </h3>
            <p className="text-gray-600">
              Premium quality products at affordable prices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-2">
              Customer Support
            </h3>
            <p className="text-gray-600">
              Friendly support team available for your help.
            </p>
          </div>

        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 bg-blue-600 rounded-3xl py-12 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          
          <div>
            <h2 className="text-4xl font-bold">10K+</h2>
            <p className="mt-2">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="mt-2">Products</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="mt-2">Support</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100%</h2>
            <p className="mt-2">Secure Payment</p>
          </div>

        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Our Mission
        </h2>

        <p className="text-gray-600 leading-8 text-lg">
          Our mission is to provide a modern online shopping experience
          with trusted products, affordable prices, and excellent
          customer service. Salva believes in quality, trust, and
          customer happiness.
        </p>
      </div>

    </div>
  );
};

export default About;