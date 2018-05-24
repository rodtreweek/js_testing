describe("Show the deck", function() {

  it("Should show the deck", function() {
    expect(playingCards.prototype.init).not.toBeNull();
  });

  it("Should show us some html", function() {
    expect(playingCards.card.prototype.getHTML).not.toBeNull();
  });
});
