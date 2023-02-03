input.onPinPressed(TouchPin.P2, function () {
    current_score = current_score + 1
    if (current_score == 5) {
        music.playMelody("C5 B A G F E D C ", 240)
        current_score = 0
    }
})
let current_score = 0
current_score = 0
let score_image = [
images.createImage(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `),
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `),
images.createImage(`
    . # # # .
    . . . # .
    . # # # .
    . # . . .
    . # # # .
    `),
images.createImage(`
    . # # # .
    . . . # .
    . # # # .
    . . . # .
    . # # # .
    `),
images.createImage(`
    . # . # .
    . # . # .
    . # # # .
    . . . # .
    . . . # .
    `),
images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
]
basic.forever(function () {
    score_image[current_score].showImage(0)
})
