describe("The 'toEqual' matcher", function() {

  it("The 'toMatch' matcher is for regular expressions", function() {
    expect(playingCards.compareRank).toMatch(/^\d+$/);
    });
});
