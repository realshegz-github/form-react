import './style.css';

function Question() {
    return (
			<div className="card w-75">
				<div class="card-body">
					<h5 class="card-title">Exco of the year.</h5>
					<p class="card-text">
						<input type="checkbox" />
						<span> Abiodun Segun</span>
						<br />
						<input type="checkbox" />
						<span> Oluseun Akinwumi</span>
						<br />
						<input type="checkbox" />
						<span> Bamidele tunde</span>
					</p>
				</div>
			</div>
		);
}

export default Question;
