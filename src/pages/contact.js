import React from "react"
import Layout from "../components/fixed/layout"

export default function Contact() {
  return (
    <Layout>
      <h2>Ask Us Anything!</h2>
      <form name="contact" className="contact-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input aria-label="hidden" type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label>
          <input aria-label="name" type="text" name="name" required/>
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input aria-label="email" type="email" name="email" required/>
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea aria-label="message" rows="4" name="message" required/>
        </p>
        <button type="submit">Send!</button>
      </form>
    </Layout>
  )
}
