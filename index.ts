import { exit } from "process"

const [node, file, ...hours] = process.argv

if (hours.length % 2 != 0) {
    console.error("Deve ser passado um numero par de horas")
    exit()
}

const minutes = hours.map(hour => {
    const [hourPart, minutePart] = hour.split(':')

    return (parseInt(hourPart) * 60) + parseInt(minutePart)
})

const minutosTrabalhados = minutes.reduce((prev, curr, currIndex, array) => {
    return currIndex % 2 != 0
        ? curr - array[currIndex - 1] + prev
        : prev
}, 0)

const horasTrabalhadasFormatadas = `${Math.floor(minutosTrabalhados / 60)}h${(minutosTrabalhados % 60)}`
console.log('Quantidade de horas trabalhadas: ', horasTrabalhadasFormatadas)