describe("Show the deck", function() {
  var cardDeck = $("#cardDeck").playingCards();

  it("Should show the deck", function() {
    expect(cardDeck.spread).toBeDefined();
    });
});
