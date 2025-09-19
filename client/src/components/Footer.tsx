import freakfestLogo from '@assets/fflogo - W.png'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img 
              src={freakfestLogo} 
              alt="Freakfest 2025" 
              className="h-8 w-auto"
            />
            <span className="font-display text-xl font-bold text-primary">
              FREAKFEST 2025
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">
              October 16-19, 2025 • Timmonsville, SC
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Freakfest. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/20 text-center">
          <p className="text-sm text-muted-foreground">
            High energy. Zero filler. Pure chaos.
          </p>
        </div>
      </div>
    </footer>
  )
}