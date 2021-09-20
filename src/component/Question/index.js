import './style.css';

function Question() {
    return (
			<div className="card w-75">
				<div class="card-body">
                    <p className="card-text"/>
                    <form action="/action_page.php">
                        <p>Exco of the year.</p>
                          <input type="radio" id="first_opt" name="fav_language" value="HTML"/>
                          <label for="first_opt"> Abiodun Segun</label><br/>
                          <input type="radio" id="second_opt" name="fav_language" value="CSS"/>
                          <label for="second_opt">Oluseun Akinwumi</label><br/>
                          <input type="radio" id="third_opt" name="fav_language" value="JavaScript"/>
                          <label for="third_opt">Bamidele tunde</label><br/>
                        </form>
				</div>
			</div>
		);
}

export default Question;
