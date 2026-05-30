import React from "react";

const Contact = () => {
  const whatsappNumber = "919798295992";
  const whatsappMessage =
    "Hello Salva Team, I want to contact you regarding your services.";

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-12 px-6 text-center">
          <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg text-gray-200">
            We’d love to hear from you. Get in touch with Salva anytime.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-10 p-8">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-600 leading-7 mb-8">
              If you have any questions regarding products, orders, support,
              business inquiries, or feedback, feel free to contact us through
              the details below. Our team will respond as soon as possible.
            </p>

            <div className="space-y-5">
              
              <div className="bg-gray-100 p-5 rounded-2xl">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Company Name
                </h3>
                <p className="text-gray-600">Salva</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Author / Founder
                </h3>
                <p className="text-gray-600">Yuvraj Singh</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Email Address
                </h3>
                <p className="text-gray-600">
                  yuvrajshingh70@gmail.com
                </p>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Mobile Number
                </h3>
                <p className="text-gray-600">9798295992</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Company Address
                </h3>
                <p className="text-gray-600">
                  Bihar, Saran - 841224, India
                </p>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Working Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Saturday : 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send Message
            </h2>

            <form className="space-y-5">
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noreferrer"
              className="block text-center mt-6 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold shadow-lg transition duration-300"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-center text-gray-300 py-5">
          © {new Date().getFullYear()} Salva. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact;