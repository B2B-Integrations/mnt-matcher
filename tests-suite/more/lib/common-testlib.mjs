export function truncate( text, maxLength = 500 ) {
  //truncate AND replace newlines with spaces
  let out = text;
  if ( out.length > maxLength ) {
    return out.substring( 0, maxLength ) + '...';
  }
  return out;
}


export function logMessage( Container, ...args ) {
  let formatted = args.map( arg => {
    if ( typeof arg === 'object' ) {
      try {
        return JSON.stringify( arg, null, 2 );
      } catch ( e ) {
        return '[Object]';
      }
    } else {
      return String( arg );
    }
  } ).join( ' ' );

  Container.text += formatted + '\n';
}

