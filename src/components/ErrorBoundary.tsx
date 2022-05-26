import React, { Component, ErrorInfo, ReactNode } from "react";
import { Toast } from "@components/Toast";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const error = "Error happened while using toasts. Needs to be fixed";
      return <Toast label={error} toastRole="error" position="bottom-right" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
