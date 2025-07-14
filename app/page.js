import Login from '@/components/Login'

export default function Home() {
  return (
    <main className="hero" id="hero">
      <div className="hero-image">
        <img src="hero-img.jpeg" alt="hero-img" />
      </div>
      <div className="hero-login">
        <Login />
      </div>
    </main>
  )
}
