/**
 * Create a game about the lifecycle of ocean seaweeds
 * 
 * Seaweeds have an asexual stage (sporophyte) and a sexual stage (gametophyte)
 * 
 * The game objective is to collect spores and gametes and avoid predators
 */
// Create a button to switch the life stage of the player
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Check the current life stage of the player
    if (lifeStage == "sporophyte") {
        // Change the life stage to gametophyte
        lifeStage = "gametophyte"
        // Change the sprite image to a gametophyte
        player2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
            `)
        // Play a sound effect
        music.powerUp.play()
        // Show a message on the screen
        game.splash("You are now a gametophyte!")
    } else {
        // Change the life stage to sporophyte
        lifeStage = "sporophyte"
        // Change the sprite image to a sporophyte
        player2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            `)
        // Play a sound effect
        music.powerDown.play()
        // Show a message on the screen
        game.splash("You are now a sporophyte!")
    }
})
/**
 * Create a score variable to keep track of the collected spores and gametes
 */
// Create an overlap handler for the player and the spores
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // Increase the score by 1
    score += 1
    // Destroy the spore sprite
    otherSprite.destroy()
    // Play a sound effect
    music.baDing.play()
    // Show the score on the screen
    info.changeScoreBy(1)
})
/**
 * Start of sexual lifecycle
 */
let score = 0
let lifeStage = ""
let player2: Sprite = null
scene.setBackgroundColor(8)
tiles.setCurrentTilemap(tilemap`level2`)
// Create a sprite for the player (a seaweed sporophyte)
player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    `, SpriteKind.Player)
// Set the player position and speed
player2.setPosition(80, 60)
player2.setVelocity(50, 50)
player2.setFlag(SpriteFlag.BounceOnWall, true)
// Create a group for the spores (the asexual reproductive cells)
let spores = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0, 0)
spores.setKind(SpriteKind.Food)
// Create a group for the gametes (the sexual reproductive cells)
let gametes = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0, 0)
gametes.setKind(SpriteKind.Food)
// Create a group for the predators (the enemies that eat seaweeds)
let predators = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0, 0)
predators.setKind(SpriteKind.Enemy)
// Set the spores, gametes, and predators speed and direction
spores.setVelocity(Math.randomRange(-50, 50), Math.randomRange(-50, 50))
spores.setFlag(SpriteFlag.BounceOnWall, true)
gametes.setVelocity(Math.randomRange(-50, 50), Math.randomRange(-50, 50))
gametes.setFlag(SpriteFlag.BounceOnWall, true)
predators.setVelocity(Math.randomRange(-50, 50), Math.randomRange(-50, 50))
predators.setFlag(SpriteFlag.BounceOnWall, true)
// Create a variable to store the current life stage of the player
lifeStage = "sporophyte"
