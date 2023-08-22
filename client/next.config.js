/** @type {import('next').NextConfig} */


const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/app/public/styles/global')],
    },
}


module.exports = nextConfig
