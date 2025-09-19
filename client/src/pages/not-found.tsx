export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-6xl font-black text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <a href="/" className="bg-primary text-black font-bold py-3 px-6 rounded hover:bg-primary/90 transition-colors">
          Go Home
        </a>
      </div>
    </div>
  )
}