import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import Global from "../styles/global";
import Card from "../components/Card";
import { ContainerCards } from "./styles";
import { Persons, ResultApi } from "../utils/interfaces";
import Pagination from "../components/Pagination";

const Pages: React.FC = () => {
  const [page, setPage] = useState(0);
  const [{ pages, persons }, setMarvelCharacters] = useState<{
    persons: Persons[];
    pages: number;
  }>({
    persons: [],
    pages: 0,
  });

  const [loading, setLoading] = useState(false);

  const fetchApi = async (offset = 0) => {
    setLoading(true);
    const res = await api.get(`characters`, {
      params: {
        apikey: "ecd3f9b869888b0bbb3af9e356a7e434",
        offset: offset * 12,
        limit: 12,
      },
    });
    const { data } = res.data;
    const results = data.results.map((result: ResultApi) => ({
      id: result.id,
      name: result.name,
      description: result.description,
      image: `${result.thumbnail.path}.${result.thumbnail.extension}`,
    }));
    setMarvelCharacters({ persons: results, pages: data.total / data.limit });
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  useEffect(() => {
    fetchApi(page);
  }, [page]);
  return (
    <>
      <Global />
      <Navbar />
      <ContainerCards>
        {persons.map((person) => (
          <Card key={person.id} {...person} />
        ))}
        <Pagination
          pageProps={{ pages, page }}
          setPage={(pageParam: number) => {
            setPage(pageParam);
          }}
        />
      </ContainerCards>
    </>
  );
};

export default Pages;
