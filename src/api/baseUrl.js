export default function getBaseUrl() {
    const isDev = /^localhost/.test (window.location.host );

    return isDev ? 'http://localhost:3002/' : '/';
}
