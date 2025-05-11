const generateKey = () => {
  let key = 0;
  return () => {
    key += 1;
    return key;
  };
};

const getNextKey = generateKey();

export default getNextKey;
