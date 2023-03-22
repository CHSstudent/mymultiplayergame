let spacePlane1 = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
let spacePlane2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
info.player1.setScore(0)
info.player2.setScore(0)
