export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '6d69d82fe3msh735396d3b9b6280p15bbd8jsn0a624e549c8b',
  },
};

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw',
  },
  headers: {
    'X-RapidAPI-Key': '6d69d82fe3msh735396d3b9b6280p15bbd8jsn0a624e549c8b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
