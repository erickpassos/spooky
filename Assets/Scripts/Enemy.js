var bulletPrefab : Rigidbody;
private var time : float = 0;

function Update () {
	var player = GameObject.Find("Player");
	if (player != null) {
		var d = player.transform.position - transform.position;
		if (d.magnitude < 10 && time > 1) {
			transform.LookAt(player.transform);
			var bullet : Rigidbody = Instantiate(bulletPrefab, transform.position, transform.rotation);
			bullet.velocity = transform.TransformDirection(Vector3.forward) * 7.5f;
			time = 0;
			audio.Play();
		}
		time += Time.deltaTime;
	}
}