import React, { Component, ErrorInfo, ReactNode } from "react";
import { Toast } from "@components/Toast";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const error = "Error happened while using Toasts. Needs to be fixed";
      return (
        <Toast
          title="Error"
          description={error}
          toastRole="error"
          position="bottom-right"
        />
      );
    }

    return this.props.children;
  }
}
