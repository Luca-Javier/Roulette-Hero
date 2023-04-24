import fs from "fs"

const enemies = fs.readdirSync("./src/assets/enemys")

fs.writeFileSync("./src/config/enemies.json", JSON.stringify(enemies))

console.log(enemies)

function add(a, b) {
  return a + b
}

add()
