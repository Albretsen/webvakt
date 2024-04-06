// id = "id_token"
export const getHashParamValue = (hash: string, key: string): string | null => {
  const hashParams = new URLSearchParams(hash.substring(1));
  return hashParams.get(key);
};
