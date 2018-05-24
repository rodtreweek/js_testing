describe("Show the deck", function() {
  var cardDeck = playingCards();

  it("Should show the deck", function() {
    expect(cardDeck.prototype.spread).not.toBeNull();
    });
});
