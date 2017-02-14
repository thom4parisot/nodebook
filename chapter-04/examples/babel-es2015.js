const getOS = userAgent => {
  const [, os, version] = userAgent.match(/\(([^;]+)\s?;\s?([^\)]+)\)/);
  return {os, version};
};

const {userAgent} = window.navigator; // <1>

console.log(getOS(userAgent)); // <2>
