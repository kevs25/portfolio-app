declare module 'react-google-recaptcha' {
    import { Component } from 'react'
  
    interface ReCAPTCHAProps {
      sitekey: string
      onChange?: (token: string | null) => void
      size?: 'compact' | 'normal' | 'invisible'
      theme?: 'dark' | 'light'
      tabindex?: number
      onExpired?: () => void
      onErrored?: () => void
    }
  
    export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {}
  }
  