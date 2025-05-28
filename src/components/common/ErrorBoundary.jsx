/* src/components/common/ErrorBoundary.jsx */
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-light text-dark">
          <h1 className="text-4xl font-bold font-serif mb-4">Something Went Wrong</h1>
          <p className="text-lg mb-8">Please try refreshing the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;