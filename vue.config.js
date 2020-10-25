module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/_globals.scss";`
            }
        }
    }
};