input.onButtonPressed(Button.A, function () {
    player_1 += -2
    basic.showString("" + (player_1))
    if (player_1 == 0) {
        basic.showString("   player 1 lost!")
        player_2 = 10
        player_1 = 10
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("player 1")
    basic.showString("" + (player_1))
    basic.showString("player 2")
    basic.showString("" + (player_2))
})
input.onButtonPressed(Button.B, function () {
    player_2 += -2
    basic.showString("" + (player_2))
    if (player_2 == 0) {
        basic.showString(" player 2 lost!")
        player_2 = 10
        player_1 = 10
    }
})
let player_1 = 0
let player_2 = 0
player_2 = 10
player_1 = 10
