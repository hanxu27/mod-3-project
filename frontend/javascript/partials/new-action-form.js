document.querySelector('Body').innerHTML += `
	<form id="action-form" hidden>
		<input hidden type="text" name="coords">
		<input type="radio" name="outcome" value="point"> point<br>
		<input type="radio" name="outcome" value="pass"> pass<br>
		<input type="radio" name="outcome" value="error"> error<br>
		<input type="number" name="number" placeholder="Player Number"><br>
		<input type="submit">
	</form>
`