module.exports = (app) => {
    app.get('/', (req, resp) => {
        resp.send(
            {'index': 0}
        );
    });
    
    app.get('/neko', (req, resp) => {
        resp.send(
            {'nekos': 1}
        );
    });
}
