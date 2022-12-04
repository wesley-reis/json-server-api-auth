module.exports = (req, res, next) => {

    if (req.header('APP_NAME') != "MAP_WDEV") {
        const status = 401
        const message = "Aplicativo sem autorização"

        res.status(status).json({ status, message })
        return;
    }
    next()
}