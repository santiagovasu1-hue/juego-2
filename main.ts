namespace SpriteKind {
    export const food2 = SpriteKind.create()
    export const food3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.food3, function (sprite, otherSprite) {
    comida_3.setPosition(randint(10, 110), randint(10, 110))
    info.setScore(1)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.food2, function (sprite, otherSprite) {
    comida_2.setPosition(randint(10, 110), randint(10, 110))
    info.setScore(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    comida_1.setPosition(randint(10, 110), randint(10, 110))
    info.changeScoreBy(1)
})
let comida_3: Sprite = null
let comida_2: Sprite = null
let comida_1: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(assets.image`jugador`, SpriteKind.Player)
mySprite.setPosition(21, 38)
comida_1 = sprites.create(assets.image`comida 2`, SpriteKind.Food)
comida_1.setPosition(70, 56)
comida_2 = sprites.create(assets.image`food 2`, SpriteKind.food2)
comida_2.setPosition(50, 30)
comida_3 = sprites.create(assets.image`food 3`, SpriteKind.food3)
comida_3.setPosition(64, 53)
info.setScore(0)
info.startCountdown(10)
controller.moveSprite(mySprite)
