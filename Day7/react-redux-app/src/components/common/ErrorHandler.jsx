import React, { Component } from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            isRetrying: false,
            retryCount: 0,
            showDetails: false,
            errorId: null
        };
    }

    handleReload = () => {
        window.location.reload();
    }

    handleRetry = async () => {
        this.setState({ isRetrying: true });

        const delay = Math.min(1000 * Math.pow(2, this.state.retryCount), 10000);

        setTimeout(() => {
            this.setState({
                hasError: false,
                error: null,
                errorInfo: null,
                isRetrying: false,
                retryCount: this.state.retryCount + 1
            });
        }, delay);
    }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails });
    }

    reportError = () => {
        const errorReport = {
            error: this.state.error?.message,
            stack: this.state.error?.stack,
            componentStack: this.state.errorInfo?.componentStack,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            errorId: this.state.errorId
        };

        console.log('Error Report:', errorReport);

        navigator.clipboard.writeText(JSON.stringify(errorReport, null, 2)).then(() => {
            alert('Error details copied to clipboard!');
        }).catch(() => {
            alert('Failed to copy error details. Check console for details.');
        });
    }

    render() {
        if (this.state.hasError) {
            var errImg = require('../../assets/error.png');
            return (
                <div className="container-fluid vh-100 d-flex align-items-center justify-content-center error-bg text-light">
                    <style>{`
                        @keyframes shake {
                            0%, 100% { transform: translateX(0); }
                            10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
                            20%, 40%, 60%, 80% { transform: translateX(2px); }
                        }
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes slideIn {
                            from { opacity: 0; transform: translateY(-10px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes spin {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                        @keyframes pulse {
                            0% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7); }
                            70% { box-shadow: 0 0 0 10px rgba(220, 53, 69, 0); }
                            100% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0); }
                        }
                        @keyframes glow {
                            0% { filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.3)); }
                            50% { filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.6)); }
                            100% { filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.3)); }
                        }

                        .error-container {
                            animation: fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                            max-width: 900px;
                        }
                        .error-image {
                            animation: shake 0.6s ease-in-out, glow 3s ease-in-out infinite;
                            transition: transform 0.3s ease;
                        }
                        .error-image:hover {
                            transform: scale(1.05);
                        }
                        .btn-retry {
                            transition: all 0.3s ease;
                            position: relative;
                            overflow: hidden;
                        }
                        .btn-retry:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 8px 25px rgba(220, 53, 69, 0.3);
                        }
                        .btn-retry:active {
                            animation: pulse 0.6s ease-out;
                        }
                        .btn-outline-light:hover {
                            transform: translateY(-1px);
                            box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
                        }
                        .btn-outline-secondary:hover {
                            transform: translateY(-1px);
                            box-shadow: 0 4px 15px rgba(108, 117, 125, 0.3);
                        }
                        .spinner {
                            animation: spin 1s linear infinite;
                        }
                        .error-details {
                            background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(20, 20, 20, 0.6));
                            border-radius: 12px;
                            backdrop-filter: blur(15px);
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            animation: slideIn 0.4s ease-out;
                        }
                        .card {
                            transition: transform 0.2s ease, box-shadow 0.2s ease;
                            border-radius: 8px;
                        }
                        .card:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                        }
                        .error-bg {
                            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                            min-height: 100vh;
                            position: relative;
                        }
                        .error-bg::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: radial-gradient(ellipse at center, rgba(220, 53, 69, 0.1) 0%, transparent 70%);
                            pointer-events: none;
                        }
                        .text-shadow {
                            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                        }
                        .glass-card {
                            background: rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            border-radius: 15px;
                        }
                    `}</style>

                    <div className="text-center error-container">
                        <div className="mb-4">
                            <img
                                src={errImg}
                                alt="Error"
                                className="img-fluid mb-4 error-image"
                                style={{
                                    maxWidth: '300px',
                                    filter: 'drop-shadow(0 0 20px rgba(255, 0, 0, 0.5))'
                                }}
                            />
                        </div>

                        <div className="mb-4">
                            <div className="glass-card p-4 mb-4">
                                <h1 className="display-3 fw-bold text-danger mb-3 text-shadow">
                                    {this.state.isRetrying ? (
                                        <>
                                            <i className="bi bi-arrow-repeat me-3"></i>
                                            Retrying...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-exclamation-triangle me-3"></i>
                                            System Error
                                        </>
                                    )}
                                </h1>
                                <p className="lead text-light mb-3">
                                    {this.state.isRetrying
                                        ? 'Please wait while we attempt to recover the application...'
                                        : 'Oops! Something went wrong. The application has encountered an unexpected error.'}
                                </p>
                                {!this.state.isRetrying && (
                                    <p className="text-white">
                                        <i className="bi bi-info-circle me-2"></i>
                                        You can try again, go back, or view detailed error information below.
                                    </p>
                                )}
                            </div>
                        </div>

                        {this.state.isRetrying ? (
                            <div className="mb-4">
                                <div className="spinner-border text-danger spinner" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3 text-muted">
                                    Attempt {this.state.retryCount + 1}...
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="row g-3 justify-content-center mb-4">
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <button
                                            className="btn btn-danger btn-lg w-100 px-4 py-3 btn-retry"
                                            onClick={this.handleRetry}
                                        >
                                            <i className="bi bi-arrow-repeat me-2"></i>
                                            <span className="d-block d-sm-inline">Try Again</span>
                                            <small className="d-block text-light opacity-75">Smart retry with delay</small>
                                        </button>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <button
                                            className="btn btn-outline-light btn-lg w-100 px-4 py-3"
                                            onClick={this.handleReload}
                                        >
                                            <i className="bi bi-arrow-clockwise me-2"></i>
                                            <span className="d-block d-sm-inline">Reload Page</span>
                                            <small className="d-block text-light opacity-75">Fresh start</small>
                                        </button>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <button
                                            className="btn btn-outline-secondary btn-lg w-100 px-4 py-3"
                                            onClick={() => window.history.back()}
                                        >
                                            <i className="bi bi-arrow-left me-2"></i>
                                            <span className="d-block d-sm-inline">Go Back</span>
                                            <small className="d-block text-light opacity-75">Previous page</small>
                                        </button>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 justify-content-center flex-wrap mb-4">
                                    <button
                                        className="btn btn-outline-warning px-4 py-2"
                                        onClick={this.toggleDetails}
                                    >
                                        <i className={`bi bi-chevron-${this.state.showDetails ? 'up' : 'down'} me-2`}></i>
                                        {this.state.showDetails ? 'Hide' : 'Show'} Technical Details
                                    </button>

                                    <button
                                        className="btn btn-outline-info px-4 py-2"
                                        onClick={this.reportError}
                                    >
                                        <i className="bi bi-clipboard me-2"></i>
                                        Copy Error Report
                                    </button>
                                </div>

                                {this.state.showDetails && (
                                    <div className="error-details p-4 mb-4 text-start">
                                        <h5 className="text-warning mb-3">
                                            <i className="bi bi-bug me-2"></i>
                                            Diagnostic Information
                                        </h5>

                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="card bg-dark border-secondary">
                                                    <div className="card-header bg-secondary">
                                                        <small className="text-light fw-bold">Error ID</small>
                                                    </div>
                                                    <div className="card-body">
                                                        <code className="text-info">{this.state.errorId}</code>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="card bg-dark border-secondary">
                                                    <div className="card-header bg-secondary">
                                                        <small className="text-light fw-bold">Timestamp</small>
                                                    </div>
                                                    <div className="card-body">
                                                        <code className="text-info">{new Date().toLocaleString()}</code>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {this.state.error && (
                                            <div className="mt-3">
                                                <div className="card bg-dark border-danger">
                                                    <div className="card-header bg-danger">
                                                        <small className="text-white fw-bold">
                                                            <i className="bi bi-exclamation-circle me-1"></i>
                                                            Error Message
                                                        </small>
                                                    </div>
                                                    <div className="card-body">
                                                        <pre className="text-danger mb-0 small bg-dark p-3 rounded border" style={{
                                                            whiteSpace: 'pre-wrap',
                                                            wordBreak: 'break-word',
                                                            fontFamily: 'Monaco, Consolas, "Courier New", monospace'
                                                        }}>
                                                            {this.state.error.message || 'No error message available'}
                                                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {this.state.error?.stack && (
                                            <div className="mt-3">
                                                <div className="card bg-dark border-warning">
                                                    <div className="card-header bg-warning">
                                                        <small className="text-dark fw-bold">
                                                            <i className="bi bi-list-ul me-1"></i>
                                                            Stack Trace
                                                        </small>
                                                    </div>
                                                    <div className="card-body">
                                                        <pre className="text-light mb-0 small bg-black p-3 rounded border" style={{
                                                            maxHeight: '250px',
                                                            overflow: 'auto',
                                                            whiteSpace: 'pre-wrap',
                                                            wordBreak: 'break-word',
                                                            fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                                                            lineHeight: '1.4'
                                                        }}>
                                                            {this.state.error.stack || 'No stack trace available'}
                                                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {this.state.errorInfo?.componentStack && (
                                            <div className="mt-3">
                                                <div className="card bg-dark border-info">
                                                    <div className="card-header bg-info">
                                                        <small className="text-dark fw-bold">
                                                            <i className="bi bi-diagram-3 me-1"></i>
                                                            Component Stack
                                                        </small>
                                                    </div>
                                                    <div className="card-body">
                                                        <pre className="text-cyan mb-0 small bg-black p-3 rounded border" style={{
                                                            maxHeight: '200px',
                                                            overflow: 'auto',
                                                            whiteSpace: 'pre-wrap',
                                                            wordBreak: 'break-word',
                                                            fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                                                            lineHeight: '1.4',
                                                            color: '#17a2b8'
                                                        }}>
                                                            {this.state.errorInfo.componentStack || 'No component stack available'}
                                                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </>
                        )}

                        <div className="mt-4">
                            <small className="text-muted">
                                Error ID: {this.state.errorId}
                            </small>
                        </div>
                    </div>
                </div>
            );
        } else {
            return this.props.children || (
                <div className="container mt-5">
                    <div className="alert alert-warning text-center" role="alert">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        <strong>No Component to render</strong>
                    </div>
                </div>
            );
        }
    }

    componentDidCatch(error, info) {
        const errorId = `ERR_${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 5)}`;

        this.setState({
            error,
            errorInfo: info,
            errorId
        });

        console.error('ErrorHandler caught an error:', error);
        console.error('Component stack:', info.componentStack);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
}

export default ErrorHandler;