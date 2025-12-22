"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { ReactNode } from "react"

const SITE_KEY = "6LdBpDEsAAAAABSqR11f4CeopOUE6RsErMk8h75u" // Valid v3 Key provided by user

export function CaptchaProvider({ children }: { children: ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
      {children}
    </GoogleReCaptchaProvider>
  )
}
