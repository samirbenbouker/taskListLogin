// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

//var tasks = ["AMS", "AWS", "CIC"];
//localStorage.setItem("taskList", JSON.stringify(tasks));

var tasks;
function afegeix_tasca() {
	var nametasc = $('#nameNewTasc').val();
	if(nametasc.length == 0){
		alert("Hace falta ponerle un nombre");
	}
	else{
		tasks = JSON.parse(localStorage.getItem('taskList'));
		tasks.push(nametasc);
		localStorage.setItem('taskList', JSON.stringify(tasks));
		$('#listview').empty();
		loadData();
	}
}

function eliminar_tasca() {
	alert("Eliminar tasca");
}

function loadData(){
	tasks = JSON.parse(localStorage.getItem('taskList'));
	for (var i = 0; i <= tasks.length - 1; i++) {
		$('#listview').append( '<li><a href="">'+tasks[i]+'</a></li>' );
	}
	$('#listview').listview('refresh');
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

    $('#addButton').click( afegeix_tasca );
    $('#delete').click( eliminar_tasca );

    loadData();

}
