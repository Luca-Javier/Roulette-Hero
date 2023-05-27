import fs from "fs"

const copyAssetsInBuild = () => {
	fs.cpSync("src/assets", "dist/src/assets", { recursive: true })
}

copyAssetsInBuild()
