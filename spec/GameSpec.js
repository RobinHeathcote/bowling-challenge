describe('Game', function () {
  var game

  beforeEach(function () {
    game = new Game()

  })

  it('starts on frame 1', function () {
    expect(game.currentFrame.frameNumber).toEqual(1)
  })

  it('adds scores for first frame of game', function () {
    game.currentFrame.firstBowl(5)
    game.currentFrame.secondBowl(5)
    expect(game.score).toEqual(10)
  })

  it('moves to next frame after two rolls', function () {
    game.currentFrame.firstBowl(5)
    game.currentFrame.secondBowl(5)
    expect(game.currentFrame.frameNumber).toEqual(2)
  })

  it('stores each frame', function () {
    game.currentFrame.firstBowl(5)
    game.currentFrame.secondBowl(5)
    expect(game.gameScores).toContain(10)
    expect(game.currentFrame.frameNumber).toEqual(2)
  })
  it('moves to next frame if player rolls a strike', function () {
    game.currentFrame.firstBowl(10)
    expect(game.currentFrame.frameNumber).toEqual(2)
  })

  it('adds together scores of two frames', function () {
    game.currentFrame.firstBowl(5)
    game.currentFrame.secondBowl(3)
    game.currentFrame.firstBowl(5)
    game.currentFrame.secondBowl(4)
    expect(game.score).toEqual(17)
    expect(game.gameScores).toContain(8)
    expect(game.gameScores).toContain(17)
  })
  it('adds a strike bonus', function () {
    game.currentFrame.firstBowl(10)
    game.currentFrame.firstBowl(10)
    expect(game.score).toEqual(30)
  })
  it('adds a spare bonus', function () {
    game.currentFrame.firstBowl(5)
    game.currentFrame.secondBowl(5)
    game.currentFrame.firstBowl(1)
    game.currentFrame.secondBowl(5)
    expect(game.score).toEqual(17)
  })
  it('allows strike bonus bowls in 10th frame', function () {
    var i = 0
    do {
      game.currentFrame.firstBowl(10)
      i++
    }
    while (i < 10)
    expect(game.currentFrame.frameNumber).toEqual('Strike Bonus')
  })
})
