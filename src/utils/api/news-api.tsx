//fetching latest psychedelic news from news api search paramenter

import axios from "axios";
//article response shape

export interface psyNewsArticleShape {
  status: string;
  totalResults: number;
  articles: {
    source: {
      id: unknown;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
}

export async function getPsyNews(date: string, key: string) {
  // 👇️ const data: GetUsersResponse
  const { data } = await axios.get<psyNewsArticleShape>(
    `https://newsapi.org/v2/everything?q=psychedelics&from=${date}&sortBy=publishedAt&apiKey=${key}`
  );
  return data;
}
