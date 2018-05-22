/** More simple, with suits ordered alphabetically (which is apparently the way it's done in Bridge):
var deck = new Array();
var suits = ["clubs", "diamonds", "hearts", "spades"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
            
function myDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}
            
function myShuffle()
{
	// for 200 turns
	// switch the values of two random cards
	for (var i = 0; i < 200; i++)
	{
		var spot1 = Math.floor((Math.random() * deck.length));
		var spot2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[spot1];

		deck[spot1] = deck[spot2];
		deck[spot2] = tmp;
	}
}

function getCardUI(card)
        {
            var el = document.createElement('div');
            var icon = '';
            if (card.Suit == 'Hearts')
            icon='♥';
            else if (card.Suit == 'Spades')
            icon = '♠';
            else if (card.Suit == 'Diamonds')
            icon = '♦';
            else
            icon = '♣';
            
            el.className = 'card2';
            el.innerHTML = card.Value + '' + icon;
            return el;
        }

function renderDeck()
{
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

function orderRank(a, b)
{
  var intRegex = /^\d+$/;
  if (a.rank == b.rank)                       return 0;
  if (a.rank == "N")                          return 1;
  if (b.rank == "N")                          return -1;
  if (a.rank == "A")                          return 1;
  if (b.rank == "A")                          return -1;
  if (!isNaN(a.rank - b.rank))                return a.rank - b.rank;
  if (a.rank == "K" && b.rank == "J")         return 1;
  if (a.rank == "J" && b.rank == "K")         return -1;
  if (a.rank == "K" && b.rank == "Q")         return 1;
  if (a.rank == "Q" && b.rank == "K")         return -1;
  if (a.rank == "Q" && b.rank == "J")         return 1;
  if (a.rank == "J" && b.rank == "Q")         return -1;
  if (a.rank == "K" && intRegex.test(b.rank)) return 1;
  if (a.rank == "Q" && intRegex.test(b.rank)) return 1;
  if (a.rank == "J" && intRegex.test(b.rank)) return 1;
  if (intRegex.test(a.rank) && b.rank == "K") return -1;
  if (intRegex.test(a.rank) && b.rank == "Q") return -1;
  if (intRegex.test(a.rank) && b.rank == "J") return -1;
}
