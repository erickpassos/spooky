function Update () {
	rigidbody.velocity = Vector3(0,0,Input.GetAxis("Vertical")*4);
}