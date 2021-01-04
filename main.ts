input.onButtonPressed(Button.A, function () {
    oyun = true
    game.gameOver()
})
let y_denge = 0
let x_denge = 0
let oyun_suresi = 0
let oyun = false
let nokta = game.createSprite(2, 2)
oyun = true
game.setScore(100)
let baslangic_sure = input.runningTime()
basic.forever(function () {
    while (true) {
        if (oyun_suresi < 10000) {
            oyun_suresi = input.runningTime() - baslangic_sure
        } else {
            oyun = false
            nokta.delete()
            basic.pause(500)
            game.gameOver()
        }
        if (game.score() == 0) {
            game.gameOver()
        }
        x_denge = input.rotation(Rotation.Roll)
        y_denge = input.rotation(Rotation.Pitch)
        if (x_denge < -10) {
            nokta.change(LedSpriteProperty.X, -1)
            basic.pause(300)
        }
        if (x_denge > 10) {
            nokta.change(LedSpriteProperty.X, 1)
            basic.pause(300)
        }
        if (y_denge < -10) {
            nokta.change(LedSpriteProperty.X, -1)
            basic.pause(300)
        }
        if (y_denge > 10) {
            nokta.change(LedSpriteProperty.X, 1)
            basic.pause(300)
        }
        if (nokta.isTouchingEdge()) {
            game.addScore(-10)
            nokta.delete()
            nokta = game.createSprite(2, 2)
        }
    }
})
