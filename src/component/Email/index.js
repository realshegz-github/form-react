import "./style.css"

function Email() {
    return (
			<div class="card w-75">
				<div class="card-body">
					<h5 class="card-title">
						Email <sup>*</sup>
					</h5>
					<p class="card-text">
						<form className="input-email">
							<input type="text" placeholder="Your email" />
						</form>
					</p>
				</div>
			</div>
		);
}

export default Email