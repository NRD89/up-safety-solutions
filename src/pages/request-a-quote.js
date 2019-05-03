import React from "react"
import styled from "styled-components"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Btn from "../components/NLBtn"

const QuoteForm = styled.form`
  max-width: 400px;
`

const StyledInput = styled.input`
  height: 2rem;
  border-radius: 3px;
  border: 1px solid #6b6b6b;
  display: block;
  width: 100%;
  padding: 0.3em;
`

const StyledTextarea = styled.textarea`
  border-radius: 3px;
  border: 1px solid #6b6b6b;
  display: block;
  width: 100%;
  padding: 0.3em;
`

const StyledLabel = styled.label`
  font-weight: 600;
`

const SuccessMessage = styled.div`
  width: 100%;
  background-color: #ffd100;
  text-align: center;
  color: #fff;
  animation-name: fade-out;
  animation-duration: 6s;

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

const RequestQuote = () => {
  const [submitted, setSubmitted] = React.useState(false)

  React.useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search)
    let form = searchParams.get('form')

    if (form === 'success') {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }
  }, [])

  return (
    <Layout>
      <PageTransition>
        {submitted && (
          <SuccessMessage><h3>Thanks for your submission!</h3></SuccessMessage>
        )}
        <h1>Request a Quote</h1>
        <h4>Phone: 999-999-4321</h4>
        <h4>Email: sales@upsafetysolutions.com</h4>
        <SEO title="Request a Quote" />
        <QuoteForm
          action="/request-a-quote/?form=success"
          name="Request a Quote"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="Request a Quote" />
          <input type="hidden" name="bot-field" />
          <div data-netlify-recaptcha="true" />
          <p>
            <StyledLabel>
              First Name* <StyledInput type="text" name="firstName" required />
            </StyledLabel>
          </p>
          <p>
            <StyledLabel>
              Last Name* <StyledInput type="text" name="lastName" required />
            </StyledLabel>
          </p>
          <p>
            <StyledLabel>
              Your Email* <StyledInput type="email" name="email" required />
            </StyledLabel>
          </p>
          <p>
            <StyledLabel>
              Company Name <StyledInput type="text" name="companyName" />
            </StyledLabel>
          </p>
          <p>
            <StyledLabel>
              Phone Number*{" "}
              <StyledInput
                type="tel"
                name="phoneNumber"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="888-888-8888"
                required
              />
            </StyledLabel>
          </p>
          <p>
            <StyledLabel>
              Message <StyledTextarea name="message" />
            </StyledLabel>
          </p>
          <p>
            <Btn type="submit">Send</Btn>
          </p>
        </QuoteForm>
      </PageTransition>
    </Layout>
  )
}

export default RequestQuote
