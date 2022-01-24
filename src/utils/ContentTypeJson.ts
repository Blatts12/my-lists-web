const getContentTypeHeaderJson = (): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  return headers;
};

export default getContentTypeHeaderJson;
