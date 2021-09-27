input.onButtonPressed(Button.A, function () {
    número += -1
})
input.onGesture(Gesture.Shake, function () {
    número = inicial
})
input.onButtonPressed(Button.AB, function () {
    if (número == segredo) {
        basic.showIcon(IconNames.Yes)
    } else if (número < segredo) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
input.onButtonPressed(Button.B, function () {
    número += 1
})
let segredo = 0
let número = 0
let inicial = 0
inicial = 5
número = inicial
segredo = randint(0, 9)
basic.forever(function () {
    basic.showNumber(número)
})
