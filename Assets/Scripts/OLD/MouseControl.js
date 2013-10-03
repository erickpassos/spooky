#pragma strict

var speed : float = 2.5f;
var relative : boolean = false;

function Update () {

	if (relative) {
		var walk = transform.TransformDirection (Vector3.forward) * Input.GetAxis("Vertical");
		var strafe = transform.TransformDirection (Vector3.right) * Input.GetAxis("Horizontal");
		rigidbody.velocity = (walk + strafe) * speed;
	}
	else {
		rigidbody.velocity = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical")) * speed;
	}
	
	var hit : RaycastHit;
    if(Physics.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit)) {
        transform.LookAt(hit.point);
        transform.localEulerAngles.x = 0;
        transform.localEulerAngles.z = 0;
    }
}

function OnCollisionEnter(collision : Collision) {
	if (collision.other.tag == "enemy") {
		Application.LoadLevel("Level1");
	}
}