AFRAME.registerComponent('frame-logger', {
    tick: function () {
        //console.log("frame");
    }
});

/*      const modelEl = document.querySelector("#MyModel");
modelEl.addEventListener("model-loaded", function () {
var playerEl = document.querySelector("[camera]");
playerEl.addEventListener("collide", function(e) {
  console.log("Player has collided with body #" + e.detail.targetEl.id);
  e.detail.targetEl; // Other entity, which playerEl touched.
});

console.log("loaded");
const modelObject3D = modelEl.object3D;

//#MyModelの子オブジェクトを列挙
modelObject3D.traverse(enumerateMeshes);

function enumerateMeshes(mesh) {
  if (mesh.isMesh) {
    if (mesh.name[0] == '(' && mesh.name[2] == ')') {
      console.log(mesh.name);
      //lookAtCamera(mesh);
    }
  }
}

function lookAtCamera(mesh) {
  //            mesh.lookAt(new THREE.Vector3(cameraPosition.x, cameraPosition.y, cameraPosition.z));
  //
  mesh.lookAt(new THREE.Vector3(0, 0, 0));
}
});
*/
const socket = io("http://{{host}}/"); // サーバーのURLに置き換える
// チャット送信イベントのハンドラ
document.getElementById("bt_chat_send").addEventListener("click", function (event) {
//        if (event.key === "Enter") {
    event.preventDefault(); // フォームの送信を防止

    const message = document.getElementById("chatInput").value;
    socket.emit("chatMessage", message);
    this.value = "";
//        }
});

// チャットメッセージ受信イベントのハンドラ
socket.on("chatMessage", function (message) {
    const chatMessages = document.getElementById("message_list");
    chatMessages.value += message + "\n";
    console.log(message);
});

socket.on('connect', function () {
    msg = 'I\'m connected!';
    console.log(msg);
    socket.emit('my event', {data: msg});
});
