export default function VenuePage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-5xl md:text-7xl font-black text-primary mb-8 text-center">
          VENUE
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-primary/30 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Cartersville Country Winery</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Located in Timmonsville, SC, this unique venue provides the perfect backdrop for four days of music and mayhem.
            </p>
            
            {/* Interactive Map */}
            <div className="aspect-video bg-black/20 border border-primary/20 rounded-lg overflow-hidden mb-6">
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
              className="bg-primary text-black font-bold py-3 px-6 rounded hover:bg-primary/90 transition-colors"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}