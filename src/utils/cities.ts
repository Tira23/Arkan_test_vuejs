import type {ICities} from "@/interface";
import {cities} from "./constants";
import {getRandomInt, helperForMoveAllCity} from "./helpers";

export function start() {
    const allCities = getAllCities()
    const [leftArr, rightArr] = distributeElementsToArrays(allCities)
    left = [...leftArr]
    right = [...rightArr]

}
export let left: ICities[] = []
export let right: ICities[] = []
// получаю случайно 10 городов
export function getAllCities() {
    // выбираю из всех городов 10
    const itemList: ICities[] = Array(10).fill(null).map(() => {
        // получаю длину массива городов
        const citiesArrayLength = cities.length
        // выбираю город наугад
        const randomCities = cities[getRandomInt(citiesArrayLength)]
        return {
            // присваиваю уникальный идентификатор
            id: getRandomInt(50000), // присваиваю имя городу
            title: randomCities, // выбирается случайно начальная позиция
            isLeft: Math.random() > .5, //  этот флаг отвечает выбран ли этот элемент
            isChose: false
        }
    })
    return itemList
}

// распределяю города по блокам для возможности масштабирования
export function distributeElementsToArrays(allCities: ICities[]) {
    const leftBlockArray = allCities.filter(el => el.isLeft)
    const rightBlockArray = allCities.filter(el => !el.isLeft)
    return [leftBlockArray, rightBlockArray]
}
export function filterAllCities(blockComputed: ICities[]){
    blockComputed.forEach(helperForMoveAllCity)
}

