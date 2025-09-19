// Placeholder TicketSection component
export default function TicketSection() {
  return (
    <section id="tickets" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-black mb-8 text-primary">
            GET TICKETS
          </h2>
          <p className="text-xl text-muted-foreground">
            Secure your spot at Freakfest 2025
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="border border-primary/30 rounded-lg p-6 bg-card">
            <h3 className="text-2xl font-bold text-primary mb-4">1 DAY PASS</h3>
            <p className="text-4xl font-bold mb-4">$35</p>
            <button 
              onClick={() => window.open('https://freakfest.bigcartel.com/product/freak-fest-2025-ticket', '_blank')}
              className="w-full bg-primary text-black font-bold py-3 px-6 rounded hover:bg-primary/90 transition-colors"
            >
              Buy Now
            </button>
          </div>
          
          <div className="border border-primary/30 rounded-lg p-6 bg-card">
            <h3 className="text-2xl font-bold text-primary mb-4">3 DAY PASS</h3>
            <p className="text-4xl font-bold mb-4">$85</p>
            <button 
              onClick={() => window.open('https://freakfest.bigcartel.com/product/freak-fest-2025-ticket', '_blank')}
              className="w-full bg-primary text-black font-bold py-3 px-6 rounded hover:bg-primary/90 transition-colors"
            >
              Buy Now
            </button>
          </div>
          
          <div className="border-2 border-primary rounded-lg p-6 bg-primary/10 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black px-3 py-1 rounded text-sm font-bold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">4 DAY PASS</h3>
            <p className="text-4xl font-bold mb-4">$110</p>
            <button 
              onClick={() => window.open('https://freakfest.bigcartel.com/product/freak-fest-2025-ticket', '_blank')}
              className="w-full bg-primary text-black font-bold py-3 px-6 rounded hover:bg-primary/90 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
        
        <p className="text-center mt-8 text-sm text-muted-foreground">
          *Single-day passes also available starting at $25
        </p>
      </div>
    </section>
  )
}