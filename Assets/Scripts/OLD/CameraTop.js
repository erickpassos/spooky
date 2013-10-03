#pragma strict

var target : Transform;
var distance : int = 6;

function Update () {
	transform.position = Vector3(target.position.x, distance, target.position.z);
}