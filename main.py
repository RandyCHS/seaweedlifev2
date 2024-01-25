"""

Create a game about the lifecycle of ocean seaweeds

Seaweeds have an asexual stage (sporophyte) and a sexual stage (gametophyte)

The game objective is to collect spores and gametes and avoid predators

"""
# Create a button to switch the life stage of the player

def on_a_pressed():
    global lifeStage
    # Check the current life stage of the player
    if lifeStage == "sporophyte":
        # Change the life stage to gametophyte
        lifeStage = "gametophyte"
        # Change the sprite image to a gametophyte
        player2.set_image(img("""
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
            """))
        # Play a sound effect
        music.power_up.play()
        # Show a message on the screen
        game.splash("You are now a gametophyte!")
    else:
        # Change the life stage to sporophyte
        lifeStage = "sporophyte"
        # Change the sprite image to a sporophyte
        player2.set_image(img("""
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
            """))
        # Play a sound effect
        music.power_down.play()
        # Show a message on the screen
        game.splash("You are now a sporophyte!")
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

"""

Create a score variable to keep track of the collected spores and gametes

"""
# Create an overlap handler for the player and the spores

def on_on_overlap(sprite, otherSprite):
    global score
    # Increase the score by 1
    score += 1
    # Destroy the spore sprite
    otherSprite.destroy()
    # Play a sound effect
    music.ba_ding.play()
    # Show the score on the screen
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

"""

Start of sexual lifecycle

"""
score = 0
lifeStage = ""
player2: Sprite = None
# Create a sprite for the player (a seaweed sporophyte)
player2 = sprites.create(img("""
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
        """),
    SpriteKind.player)
# Set the player position and speed
player2.set_position(80, 60)
player2.set_velocity(50, 50)
player2.set_flag(SpriteFlag.BOUNCE_ON_WALL, True)
# Create a group for the spores (the asexual reproductive cells)
spores = sprites.create_projectile_from_side(img("""
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
        """),
    0,
    0)
spores.set_kind(SpriteKind.food)
# Create a group for the gametes (the sexual reproductive cells)
gametes = sprites.create_projectile_from_side(img("""
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
        """),
    0,
    0)
gametes.set_kind(SpriteKind.food)
# Create a group for the predators (the enemies that eat seaweeds)
predators = sprites.create_projectile_from_side(img("""
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
        """),
    0,
    0)
predators.set_kind(SpriteKind.enemy)
# Set the spores, gametes, and predators speed and direction
spores.set_velocity(Math.random_range(-50, 50), Math.random_range(-50, 50))
spores.set_flag(SpriteFlag.BOUNCE_ON_WALL, True)
gametes.set_velocity(Math.random_range(-50, 50), Math.random_range(-50, 50))
gametes.set_flag(SpriteFlag.BOUNCE_ON_WALL, True)
predators.set_velocity(Math.random_range(-50, 50), Math.random_range(-50, 50))
predators.set_flag(SpriteFlag.BOUNCE_ON_WALL, True)
# Create a variable to store the current life stage of the player
lifeStage = "sporophyte"