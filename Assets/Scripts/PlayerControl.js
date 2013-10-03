var speed : float = 4;
var rotSpeed : float = 5;

function Update () {
	var walk = transform.TransformDirection (Vector3.forward) * Input.GetAxis("Vertical");
	var strafe = transform.TransformDirection (Vector3.right) * Input.GetAxis("Horizontal");
	rigidbody.velocity = (walk + strafe) * speed;
	transform.Rotate(0, Input.GetAxis("Mouse X") * rotSpeed, 0);
}

function OnCollisionEnter(collision : Collision) {
	if (collision.other.tag == "enemy") {
		Application.LoadLevel("Level1");
	}
}