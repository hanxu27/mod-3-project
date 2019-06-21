document.querySelector('Body').innerHTML += `
	<form id="action-form" hidden>
		<div class="row">
			<div id="af-col-1" class="col-md-7">
				<input required type="number" name="number" placeholder=" Player Number">
				<br><br>
				<select name="actionType">
					<option disabled>Action Type</option>
					<option value="serve">Serve</option>
					<option value="pass">Pass</option>
					<option value="spike">Spike</option>
				</select>
				<br><br>
				<input hidden type="text" name="coords">
				<input type="submit" class="btn btn-primary">
			</div>

			<div id="af-col-2" class="col-md-5">
				<label class="text-secondary">Outcome</label>
				<br>
				<input type="radio" name="outcome" value="point"> point<br>
				<input type="radio" name="outcome" value="received"> received<br>
				<input type="radio" name="outcome" value="error"> error<br>
			</div>
		</div>
	</form>
`