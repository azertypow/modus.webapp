import { exec } from "https://deno.land/x/exec/mod.ts";


const imagePath = './public/images'
const maxDimension = 1900
const outputDirName = 'compress'

async function main() {
    try {
        await Deno.remove(`${imagePath}/${outputDirName}`, {recursive: true})
    } catch (e) {
        console.info(e)
    }

    await Deno.mkdir(`${imagePath}/${outputDirName}`)

    const images = Deno.readDirSync(imagePath)

    for(const image of images) {
        runFFMpeg(image)
    }
}

async function runFFMpeg(image: Deno.DirEntry) {
    if( ! (image.isFile && image.name.endsWith(".jpg")) ) return

    const ffmpegCommand = `ffmpeg -i ${imagePath}/${image.name} -vf "scale='min(${maxDimension}\\,iw):-2'" -q:v 5 ${imagePath}/${outputDirName}/${image.name}`

    const create = await exec  ( ffmpegCommand )
    console.log( create )
}

main()
