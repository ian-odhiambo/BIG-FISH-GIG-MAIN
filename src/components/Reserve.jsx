const Reserve = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&fit=crop&q=80")',
        }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="w-full md:w-1/2 ml-auto bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/30">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Are you ready for a fish experience 🍴🐠?
              <span className="text-amber-500 block">Let's make you a reservation!</span>
            </h1>
            <p className="text-lg mb-4 text-white/90">
              Reserve your table now and enjoy a delightful dining experience with
              us. Any time and any day of the week we have a special place for you
              at the ready.
            </p>
          </div>
          
          <form className="flex flex-col gap-5">
            <div>
              <div className="font-semibold mb-2 text-white">Name</div>
              <input
                type="text"
                className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded text-white placeholder-white/70 focus:bg-white/30 focus:border-white focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <div className="font-semibold mb-2 text-white">Email</div>
              <input
                type="email"
                className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded text-white placeholder-white/70 focus:bg-white/30 focus:border-white focus:outline-none"
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <div className="font-semibold mb-2 text-white">Phone</div>
              <input
                type="tel"
                className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded text-white placeholder-white/70 focus:bg-white/30 focus:border-white focus:outline-none"
                placeholder="Phone number"
                required
              />
            </div>
            <div>
              <div className="font-semibold mb-2 text-white">Date</div>
              <input
                type="date"
                className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded text-white focus:bg-white/30 focus:border-white focus:outline-none"
                required
              />
            </div>
            <div>
              <div className="font-semibold mb-2 text-white">Time</div>
              <input
                type="time"
                className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded text-white focus:bg-white/30 focus:border-white focus:outline-none"
                required
              />
            </div>
            <div>
              <div className="font-semibold mb-2 text-white">Party Size</div>
              <input
                type="number"
                className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded text-white placeholder-white/70 focus:bg-white/30 focus:border-white focus:outline-none"
                placeholder="Number of people"
                min="1"
                required
              />
            </div>
            <div>
              <div className="font-semibold mb-2 text-white">Special Requests</div>
              <textarea
                className="w-full p-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded text-white placeholder-white/70 focus:bg-white/30 focus:border-white focus:outline-none"
                placeholder="Any special requests or notes"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600/80 hover:bg-red-700 text-white p-3 rounded font-semibold text-lg mt-4 transition backdrop-blur-sm"
            >
              Book Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reserve;