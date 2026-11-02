namespace SpriteKind {
    export const tube = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -100
        music.pewPew.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    mySprite.say("+10", 1000)
    info.changeScoreBy(10)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.over(true)
})
let projectile: Sprite = null
let mySprite: Sprite = null
game.showLongText("Bienvenue dans Super Burger Bros 2", DialogLayout.Center)
game.showLongText("Les blocks lisses représentent des saut de 5 blocks et plus!", DialogLayout.Center)
game.showLongText("Les murs de 2 couleurs signifie qu'il faut les collées!", DialogLayout.Center)
game.showLongText("Les blocks craquellés ne sont pas considéré comme des murs!", DialogLayout.Center)
game.showLongText("Bonne chance;)", DialogLayout.Center)
tiles.setTilemap(tilemap`level1`)
info.startCountdown(600)
mySprite = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
let fleur1 = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . f f f 2 2 2 2 2 2 2 2 f f f . 
    f f 2 2 2 5 5 5 5 5 5 2 2 2 f f 
    f 2 2 5 5 5 f 1 1 f 5 5 5 2 2 f 
    f 2 2 5 5 5 f 5 5 f 5 5 5 2 2 f 
    f 2 2 2 2 5 5 5 5 5 5 2 2 2 2 f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    . f f f 2 2 2 2 2 2 2 2 f f f . 
    . . . f f f f f f f f f f . . . 
    . f f . . . f 7 7 f . . . f f . 
    f 7 7 f f . f 7 7 f . f f 7 7 f 
    f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
    f 7 7 7 7 7 f 7 7 f 7 7 7 7 7 f 
    . f 7 7 7 7 f 7 7 f 7 7 7 7 f . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(fleur1, tiles.getTileLocation(4, 29))
let fleur2 = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . f f f 2 2 2 2 2 2 2 2 f f f . 
    f f 2 2 2 5 5 5 5 5 5 2 2 2 f f 
    f 2 2 5 5 5 f 1 1 f 5 5 5 2 2 f 
    f 2 2 5 5 5 f 5 5 f 5 5 5 2 2 f 
    f 2 2 2 2 5 5 5 5 5 5 2 2 2 2 f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    . f f f 2 2 2 2 2 2 2 2 f f f . 
    . . . f f f f f f f f f f . . . 
    . f f . . . f 7 7 f . . . f f . 
    f 7 7 f f . f 7 7 f . f f 7 7 f 
    f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
    f 7 7 7 7 7 f 7 7 f 7 7 7 7 7 f 
    . f 7 7 7 7 f 7 7 f 7 7 7 7 f . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(fleur2, tiles.getTileLocation(55, 29))
let fleur3 = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . f f f 2 2 2 2 2 2 2 2 f f f . 
    f f 2 2 2 5 5 5 5 5 5 2 2 2 f f 
    f 2 2 5 5 5 f 1 1 f 5 5 5 2 2 f 
    f 2 2 5 5 5 f 5 5 f 5 5 5 2 2 f 
    f 2 2 2 2 5 5 5 5 5 5 2 2 2 2 f 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    . f f f 2 2 2 2 2 2 2 2 f f f . 
    . . . f f f f f f f f f f . . . 
    . f f . . . f 7 7 f . . . f f . 
    f 7 7 f f . f 7 7 f . f f 7 7 f 
    f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
    f 7 7 7 7 7 f 7 7 f 7 7 7 7 7 f 
    . f 7 7 7 7 f 7 7 f 7 7 7 7 f . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(fleur3, tiles.getTileLocation(120, 27))
let piece2 = sprites.create(img`
    . . . . . f f f f f f f . . . . 
    . . . f f f 1 1 1 f f f f . . . 
    . . f f 1 1 5 5 5 5 5 f f . . . 
    . . f 1 5 5 1 1 1 f 5 5 f f . . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . . f 1 5 5 f f f f 5 5 f f . . 
    . . f f 1 5 5 5 5 5 5 f f . . . 
    . . . f f f 5 5 5 f f f f . . . 
    . . . . f f f f f f f . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(piece2, tiles.getTileLocation(19, 20))
let piece4 = sprites.create(img`
    . . . . . f f f f f f f . . . . 
    . . . f f f 1 1 1 f f f f . . . 
    . . f f 1 1 5 5 5 5 5 f f . . . 
    . . f 1 5 5 1 1 1 f 5 5 f f . . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . . f 1 5 5 f f f f 5 5 f f . . 
    . . f f 1 5 5 5 5 5 5 f f . . . 
    . . . f f f 5 5 5 f f f f . . . 
    . . . . f f f f f f f . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(piece4, tiles.getTileLocation(39, 16))
let piece6 = sprites.create(img`
    . . . . . f f f f f f f . . . . 
    . . . f f f 1 1 1 f f f f . . . 
    . . f f 1 1 5 5 5 5 5 f f . . . 
    . . f 1 5 5 1 1 1 f 5 5 f f . . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . . f 1 5 5 f f f f 5 5 f f . . 
    . . f f 1 5 5 5 5 5 5 f f . . . 
    . . . f f f 5 5 5 f f f f . . . 
    . . . . f f f f f f f . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(piece6, tiles.getTileLocation(94, 19))
let piece8 = sprites.create(img`
    . . . . . f f f f f f f . . . . 
    . . . f f f 1 1 1 f f f f . . . 
    . . f f 1 1 5 5 5 5 5 f f . . . 
    . . f 1 5 5 1 1 1 f 5 5 f f . . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . . f 1 5 5 f f f f 5 5 f f . . 
    . . f f 1 5 5 5 5 5 5 f f . . . 
    . . . f f f 5 5 5 f f f f . . . 
    . . . . f f f f f f f . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(piece8, tiles.getTileLocation(51, 12))
let piece10 = sprites.create(img`
    . . . . . f f f f f f f . . . . 
    . . . f f f 1 1 1 f f f f . . . 
    . . f f 1 1 5 5 5 5 5 f f . . . 
    . . f 1 5 5 1 1 1 f 5 5 f f . . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f 1 5 5 5 1 5 5 f 5 5 5 f f . 
    . f f 1 5 5 1 5 5 f 5 5 f f . . 
    . . f 1 5 5 f f f f 5 5 f f . . 
    . . f f 1 5 5 5 5 5 5 f f . . . 
    . . . f f f 5 5 5 f f f f . . . 
    . . . . f f f f f f f . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(piece10, tiles.getTileLocation(127, 30))
let tube1 = sprites.create(img`
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.tube)
tiles.placeOnTile(tube1, tiles.getTileLocation(0, 12))
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . c a a a a . . . . . . . 
        . . . . a a f f b a . . . . . . 
        . . . c a b f f c b . . . . . . 
        . . . c b b b a f c b . . . . . 
        . . . c b a c a b b b . . . . . 
        . . . . b b f f a a c . . . . . 
        . . . . . a a b b c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fleur1, 0, -50)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . c a a a a . . . . . . . 
        . . . . a a f f b a . . . . . . 
        . . . c a b f f c b . . . . . . 
        . . . c b b b a f c b . . . . . 
        . . . c b a c a b b b . . . . . 
        . . . . b b f f a a c . . . . . 
        . . . . . a a b b c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fleur2, 0, -50)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . c a a a a . . . . . . . 
        . . . . a a f f b a . . . . . . 
        . . . c a b f f c b . . . . . . 
        . . . c b b b a f c b . . . . . 
        . . . c b a c a b b b . . . . . 
        . . . . b b f f a a c . . . . . 
        . . . . . a a b b c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fleur3, 0, -50)
})
