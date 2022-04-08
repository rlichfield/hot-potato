input.onButtonPressed(Button.A, function () {
    basic.showString("3 2 1 Go!")
    timer = randint(4, 10)
    while (timer > 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        timer += -1
    }
    basic.showIcon(IconNames.Skull)
})
let timer = 0
basic.showString("Hot Potato!")
