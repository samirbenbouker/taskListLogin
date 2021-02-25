// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function afegeix_tasca() {
	var nametasc = $('#nameNewTasc').val();
	$('#listview').append( '<li><a href="" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+nametasc+'</a></li>' );
}

function eliminar_tasca() {
	alert("ELiminar tasca");

}
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

    $('#addButton').click( afegeix_tasca );
    $('#delete').click( eliminar_tasca );

}
