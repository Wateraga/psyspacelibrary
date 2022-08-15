// fetching latest psychedelic news from news api search paramenter

import axios from "axios";

// article response shape
export interface psyNewsArticleShape {
  status: string;
  total_hits: number;
  page: number;
  total_pages: number;
  page_size: number;
  articles: {
    _id: string;
    title: string;
    author: string;
    link: string;
    media: string;
    published_date: string;
    summary: string;
  }[];
}
/**
 *Takes two params
 * @param {string} searchParam search parameter
 * @param {number} pageSize the secong argument
 * @return {object} list of news with psychedelic search query
 */
export async function getPsyNews(searchParam: string, pageSize: number) {
  const { data } = await axios.get<psyNewsArticleShape>(
    "https://free-news.p.rapidapi.com/v1/search",
    {
      params: {
        q: `${searchParam}`,
        lang: "en",
        page: "1",
        page_size: `${pageSize}`,
      },

      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_NEWS_FREE_API}`,
        "x-rapidapi-host": "free-news.p.rapidapi.com",
      },
    }
  );
  return data;
}
