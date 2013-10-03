var friendTag : String;
var explosionPrefab : ParticleEmitter;

function Update () {
	rigidbody.WakeUp();
	rigidbody.velocity.y = 0;
}

function OnTriggerEnter(other : Collider) {
	if (other.tag != friendTag) {
		var explosion : ParticleEmitter = Instantiate(explosionPrefab, transform.position, transform.rotation);
		explosion.Emit();
		Destroy(gameObject);
		
		if (other.tag != "Wall") {
			Destroy(other.gameObject);
			if (other.tag == "Player") {
				Application.LoadLevel("Level1");
			}
		}
	}
}