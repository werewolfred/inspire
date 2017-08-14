function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
		var sentence = quote.author + ': ' + quote.quote
		document.getElementById('quote').innerHTML = sentence
	})
}
