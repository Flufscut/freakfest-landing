// Placeholder EmailCapture component
export default function EmailCapture() {
  return (
    <section id="newsletter" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8 text-primary">
            STAY IN THE LOOP
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get updates on lineup announcements, ticket releases, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}