#pragma strict

var endObject : Transform;

function OnTriggerEnter(other : Collider) {
	if (other.tag != "Player")
		endObject.gameObject.SetActive(true);
}