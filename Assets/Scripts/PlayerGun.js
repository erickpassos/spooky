var bulletPrefab : Rigidbody;

function Update () {
	if (Input.GetButtonDown("Fire1")) {
		var bullet : Rigidbody = Instantiate(bulletPrefab, transform.position, transform.rotation);
		bullet.velocity = transform.TransformDirection(Vector3.forward) * 7.5f;
		audio.Play();
	}
}