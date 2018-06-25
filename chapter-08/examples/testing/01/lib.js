'use strict';

module.exports = (timezone) => {
  if (!timezone) {
    throw Error('Merci d\'indiquer un fuseau horaire :-)');
  }

  const options = {
    timeZone: timezone,
    hour: 'numeric', minute: 'numeric', hour12: false
  };

  return new Date().toLocaleDateString('fr-FR', options);
}
