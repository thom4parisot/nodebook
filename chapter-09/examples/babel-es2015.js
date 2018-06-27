const getOS = userAgent => {
  const USER_AGENT = /\(([^;]+)\s?;\s?([^)]+)\)/;
  const [, os, version] = userAgent.match(USER_AGENT);

  return {os, version};
};

const {userAgent} = window.navigator; // <1>

console.log(getOS(userAgent));        // <2>
