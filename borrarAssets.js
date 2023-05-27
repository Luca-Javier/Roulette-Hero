import fs from "fs"

function getFiles(folderName, filesArray) {
	const files = fs.readdirSync(folderName)
	for (const file of files) {
		const filePath = `${folderName}/${file}`
		if (fs.statSync(filePath).isDirectory()) {
			getFiles(filePath, filesArray)
		} else {
			filesArray.push(filePath.slice(filePath.lastIndexOf("/") + 1))
		}
	}
}

function getNameAndExtension(files, specialLastIndex) {
	const array = []

	files.forEach(file => {
		const fileWihoutDir = file.slice(file.lastIndexOf("/") + 1)
		const fileNameToSplit = fileWihoutDir.replace(".", "@.")
		const [name, extension] = fileNameToSplit.split("@")

		if (specialLastIndex) {
			const newName = name.slice(0, name.lastIndexOf(specialLastIndex))

			return array.push({ name: newName, extension, realName: name })
		}

		array.push({ name, extension })
	})

	return array
}

const filesArray = []
getFiles("./src/assets", filesArray)
const filesSearch = getNameAndExtension(filesArray)

const filesArrayToEliminate = []
getFiles("./dist/assets", filesArrayToEliminate)
const filesToEliminate = getNameAndExtension(filesArrayToEliminate, "-")

filesSearch.forEach(file => {
	let index

	filesToEliminate.find((fileToEliminate, i) => {
		if (
			!(fileToEliminate.name === file.name) &&
			!(fileToEliminate.extension === file.extension)
		)
			return

		index = i
		return true
	})

	if (index) fs.unlinkSync("./dist/assets" + filesToEliminate[index].realName)
})
