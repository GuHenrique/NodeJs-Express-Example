app.use(function (req, resp, next) {
    return resp.status(404).marko(
        require('../app/views/base/erros/404.marko')
    );
});

app.use(function (erro, req, resp, next) {
    return resp.status(500).marko(
        require('../app/views/base/erros/500.marko')
    );
});