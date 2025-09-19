// Placeholder VenueSection component
export default function VenueSection() {
  return (
    <section id="venue" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-black mb-8 text-primary">
            VENUE & TRAVEL
          </h2>
          <p className="text-xl text-muted-foreground">
            Cartersville Country Winery • Timmonsville, SC
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-primary/30 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Location</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Cartersville Country Winery<br />
              123 Winery Road<br />
              Timmonsville, SC 29161
            </p>
            
            {/* Interactive Map */}
            <div className="aspect-video bg-black/20 border border-primary/20 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.9700000000005!2d-79.9904887!3d34.075900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885611e000000001%3A0x123456789abcdef0!2sCartersville%20Country%20Winery!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cartersville Country Winery Map"
              ></iframe>
            </div>
            
            <button 
              onClick={() => window.open('https://maps.google.com/?q=Cartersville+Country+Winery+Timmonsville+SC', '_blank')}
              className="mt-4 bg-primary text-black font-bold py-2 px-6 rounded hover:bg-primary/90 transition-colors"
            >
              Get Directions
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-primary/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Camping</h3>
              <p className="text-muted-foreground">
                Free camping included with your ticket! First come, first serve. 
                Arrive Thursday to secure your spot.
              </p>
            </div>
            
            <div className="bg-card border border-primary/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Amenities</h3>
              <p className="text-muted-foreground">
                Indoor bathrooms, multiple stages, food vendors, and more. 
                Everything you need for an epic weekend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}