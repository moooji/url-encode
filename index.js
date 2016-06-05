'use strict';

function encode(url) {
  try {
    // Make sure that URL is decoded 
    // before encoding it
    const decodedUrl = decodeURI(url);

    if (decodedUrl === url) {
      return encodeURI(url);
    }

    return encode(decodedUrl);
  }
  catch (err) {
    throw new Error('Url is malformed');
  }
}

module.exports = encode;
