export const fetchUni = async (country: string) => {
  const URL_UNI: string = `http://universities.hipolabs.com/search?country=${country}`;

  const response = await fetch(URL_UNI);
  const result = await response.json();
  if (response.ok) {
    return (`${result.web_pages} ${result.name}${result.province}`);
  } else {
    return ("Some Network Error");
  }
};
