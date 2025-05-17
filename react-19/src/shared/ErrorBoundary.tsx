import { Component } from 'react'
import type React from 'react';

interface Props {
  fallback: React.ReactNode
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: React.ErrorInfo ) {
    // Update state so the next render will show the fallback UI.
    console.log('ErrorBoundary: getDerivedStateFromError', error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // logErrorToMyService(
      //   error,
      //   // Example "componentStack":
      //   //   in ComponentThatThrows (created by App)
      //   //   in ErrorBoundary (created by App)
      //   //   in div (created by App)
      //   //   in App
      //   info.componentStack,
      //   // Warning: `captureOwnerStack` is not available in production.
      //   React.captureOwnerStack(),
      // )
      console.log('ErrorBoundary: componentDidCatch', error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback
    }

    return this.props.children
  }
}
