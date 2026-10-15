import { useState } from 'react'
import './LoginPage.css'

function LoginPage() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Sign-in is not connected to an authentication service yet.')
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <div className="login-brand" aria-label="PDF Creator">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>PDF Creator</span>
        </div>

        <header className="login-header">
          <p className="login-eyebrow">WELCOME BACK</p>
          <h1 id="login-title">Sign in to your account</h1>
          <p className="login-description">
            Enter your details to continue.
          </p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />

          <div className="password-label">
            <label htmlFor="password">Password</label>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Sign in</button>
          {message && (
            <p className="login-message" role="status">
              {message}
            </p>
          )}
        </form>
      </section>
      <p className="login-footer">Securely manage your documents in one place.</p>
    </main>
  )
}

export default LoginPage
