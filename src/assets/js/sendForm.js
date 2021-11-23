
const btnSubmit = document.querySelector('.button_dark');

function sendData( data ) {
  console.log( 'Sending data' );

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  
  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  // Define what happens on successful data submission
  XHR.addEventListener( 'load', function(event) {
    alert( 'Ваши данные отправлены' );
  } );

  // Define what happens in case of error
  XHR.addEventListener( 'error', function(event) {
    alert( 'Что-то пошло не так' );
  } );

  // Set up our request
  XHR.open( 'POST', '/mail.php' );

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  // Finally, send our data.
  XHR.send( urlEncodedData );
}

btnSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
	sendData({
		phone: document.querySelector('input[name="client_phone"]').value,
		mail: document.querySelector('input[name="client_mail"]').value,
		message: document.querySelector('input[name="client_message"]').value,
  });
  
} )