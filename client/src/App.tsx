import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black text-white">
        <header className="p-4 border-b border-green-500">
          <h1 className="text-4xl font-bold text-green-400">Freakfest 2025</h1>
        </header>
        <main className="p-8">
          <section className="text-center py-16">
            <h2 className="text-6xl font-bold mb-4 text-green-400">
              October 16-19, 2025
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Cartersville Country Winery • Timmonsville, SC
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              High-impact sets. Production that hits. Four days of hardcore punk and rave culture. 
              Zero filler. Pure energy.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition-colors">
              Get Tickets
            </button>
          </section>
          
          <section className="py-16 text-center">
            <h3 className="text-3xl font-bold mb-8 text-green-400">What is Freakfest?</h3>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
              <p>
                Prepare for an unparalleled experience at Freakfest 2025! We're bringing you 
                <strong className="text-green-400"> four days of relentless energy</strong>, 
                where the raw power of hardcore punk collides with the pulsating rhythms of rave culture.
              </p>
              <p>
                By day, witness <strong className="text-green-400">the best bands and DJs</strong> 
                from the Carolinas, the Southeast, and beyond across 
                <strong className="text-green-400"> three dynamic stages</strong>. 
                As dusk falls, the intensity shifts to <strong className="text-green-400">The Club</strong>, 
                where we rave all night long.
              </p>
              <p>
                Beyond the music, explore a vibrant arts & crafts market, indulge in delicious 
                offerings from food vendors, and even catch a 
                <strong className="text-green-400"> pro wrestling show</strong>! 
                With <strong className="text-green-400">free camping included</strong> 
                (first come, first serve), you can truly live the Freakfest experience from start to finish.
              </p>
            </div>
          </section>

          <section className="py-16 text-center">
            <h3 className="text-3xl font-bold mb-8 text-green-400">Get Tickets</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="border border-green-500 rounded-lg p-6 bg-gray-900">
                <h4 className="text-xl font-bold mb-2 text-green-400">1 DAY PASS</h4>
                <p className="text-3xl font-bold mb-4 text-white">$35</p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded transition-colors">
                  Buy Now
                </button>
              </div>
              <div className="border border-green-500 rounded-lg p-6 bg-gray-900">
                <h4 className="text-xl font-bold mb-2 text-green-400">3 DAY PASS</h4>
                <p className="text-3xl font-bold mb-4 text-white">$85</p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded transition-colors">
                  Buy Now
                </button>
              </div>
              <div className="border-2 border-green-400 rounded-lg p-6 bg-green-900 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-400 text-black px-3 py-1 rounded text-sm font-bold">
                  Most Popular
                </div>
                <h4 className="text-xl font-bold mb-2 text-green-400">4 DAY PASS</h4>
                <p className="text-3xl font-bold mb-4 text-white">$110</p>
                <button className="w-full bg-green-400 hover:bg-green-300 text-black font-bold py-2 px-4 rounded transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-400">*Single-day passes also available starting at $25</p>
          </section>
        </main>
        
        <footer className="border-t border-green-500 p-8 text-center text-gray-400">
          <p>&copy; 2025 Freakfest. All rights reserved.</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;