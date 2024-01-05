const { saludar, saludarMundo }= require('./saludos.js')

console.log(saludar("Hc"))

console.log(saludarMundo())

console.warn('Ocurrio un error...')

console.error(new Error('Ocurrio un error'))

console.log(process.argv)