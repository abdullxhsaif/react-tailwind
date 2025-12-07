import React from "react";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
<header className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">SAIF</div>
          <nav className="space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
</header>

      

<main className="flex-grow:1 container mx-auto px-16 py-20 text-center">
  <h1 className="text-5xl font-extrabold mb-6 text-gray-900 pt-20">
    Welcome to My Site
  </h1>
  <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
    Explore our platform and discover how we can help you achieve your goals. 
    Get updates, tips, and exclusive content right to your inbox.
  </p>
  <button className="text-white bg-gray-800  hover:bg-blue-700 px-8 py-3 cursor-pointer rounded-lg transition duration-300 font-semibold">
    Get Started
  </button>
</main>


<section className="bg-white py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Support</h3>
        <p className="text-gray-700">Get help whenever you need it with our round-the-clock customer support, ready to assist you instantly.</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Secure Data</h3>
        <p className="text-gray-700">Your information is protected with top-level security measures, giving you peace of mind every time you use our services.</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
        <p className="text-gray-700">Experience lightning-fast load times and seamless interactions across our platform, optimized for efficiency.</p>
      </div>
    </div>
  </div>
</section>


<section className="bg-gray-100 py-12">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
    <p className="text-gray-700 mb-6">Get the latest updates and offers straight to your inbox.</p>
    <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-auto flex-grow:1"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg  hover:bg-blue-700 cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>
     


<footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div>
            <h3 className="font-bold text-xl mb-2">About</h3>
            <p className="text-sm">Saif © 2025. All rights reserved.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
</footer>
</div>
  );
}

export default App;
