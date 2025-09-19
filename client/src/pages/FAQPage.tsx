export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-5xl md:text-7xl font-black text-primary mb-8 text-center">
          FAQ
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="bg-card border border-primary/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-3">When is Freakfest 2025?</h3>
              <p className="text-muted-foreground">October 16-19, 2025 at Cartersville Country Winery in Timmonsville, SC.</p>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Is camping included?</h3>
              <p className="text-muted-foreground">Yes! Free camping is included with your ticket. First come, first serve - arrive Thursday to secure your spot.</p>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-3">What should I bring?</h3>
              <p className="text-muted-foreground">Bring warm layers, camping gear if staying overnight, and your energy for four days of music!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}