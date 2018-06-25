'use strict';

module.exports = (timezone) => {
  return new Promise((resolve, reject) => { // <1>
    if (!timezone) {
      reject(Error('Merci d\'indiquer un fuseau horaire :-)'));
    }

    const options = {
      timeZone: timezone,
      hour: 'numeric', minute: 'numeric', hour12: false
    };

    resolve(new Date().toLocaleDateString('fr-FR', options));
  });
}
