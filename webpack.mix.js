const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// mix.webpackConfig({
//     output: {
//         // chunkFilename: '[name].[chunkhash].js',
//         chunkFilename:
//             process.env.NODE_ENV === "production"
//                 ? "[name].[chunkhash].js"
//                 : "[name].js",
//     },
//     resolve: {
//         alias: {
//             "@": path.resolve(__dirname, "resources/js/"),
//         },
//     },
// });

mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css");

// if (process.env.module) {
//     mix.js(`resources/js/${process.env.module}.js`, "public/js");
//     return;
// }

/*
 * Demo
 */
mix.js("resources/js/demo.js", "public/js");
