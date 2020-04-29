const imagemin = require("imagemin")
const imageminJpegtran = require("imagemin-jpegtran")
const imageminPngquant = require("imagemin-pngquant")

(async () => {
    const files = await imagemin(["img/*.{jpg,png}"], {
        destination: "build/images",
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    })
    console.log(files)
})()