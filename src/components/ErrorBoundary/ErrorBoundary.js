import React from 'react';
import {Alert} from "@material-ui/lab";

export class ErrorBoundary extends React.Component {
    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.error && this.state.errorInfo) {
            return <Alert severity="error">An error occurred.</Alert>
        }
        return this.props.children;
    }
}