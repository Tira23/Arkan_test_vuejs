// получаем рандомно число для выборки городов
import type {ICities} from "@/interface";

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}
// меняет значение isChose на выбранном городе
export function toggleChoseCity(city: ICities) {
    city.isChose = !city.isChose
}
export function helperForMoveCity(city:ICities) {
    if (city.isChose) {
        city.isChose = !city.isChose
        city.isLeft = !city.isLeft
    }
}

export function helperForMoveAllCity(city:ICities) {
        city.isChose = false
        city.isLeft = !city.isLeft
}
