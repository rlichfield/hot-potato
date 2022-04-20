input.onButtonPressed(Button.A, function () {
    basic.showString("3 2 1 Go!")
    timer = randint(4, 10)
    while (timer > 0) {
        range = range.range(0, 4)
        range.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
        range = range.range(4, 7)
        basic.pause(500)
        timer += -1
        range.showColor(neopixel.colors(NeoPixelColors.White))
    }
    range.showColor(neopixel.colors(NeoPixelColors.Red))
})
let range: neopixel.Strip = null
let timer = 0
let strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
