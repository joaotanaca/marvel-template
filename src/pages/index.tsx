/* eslint-disable react-hooks/exhaustive-deps */
import React, { FormEvent, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import Global from "../styles/global";
import Card from "../components/Card";
import { ContainerCards, FilterContainer, InputFilter, Title } from "./styles";
import { Persons, ResultApi } from "../utils/interfaces";
import Pagination from "../components/Pagination";
import { VscChevronDown, VscFilter } from "react-icons/vsc";
import Footer from "../components/Footer";

const Pages: React.FC = () => {
  const [page, setPage] = useState(0);
  const [{ pages, persons, asc }, setMarvelCharacters] = useState<{
    persons: Persons[];
    pages: number;
    asc: boolean;
  }>({
    persons: [],
    pages: 0,
    asc: false,
  });

  const [search, setSearch] = useState("");
  const [filterArray, setFilterArray] = useState<Persons[]>([]);
  const [copy, setCopy] = useState("");
  const fetchApi = async (offset = 0) => {
    const res = await api.get(`characters`, {
      params: {
        apikey: "ecd3f9b869888b0bbb3af9e356a7e434",
        offset: offset * 12,
        limit: 12,
      },
    });
    const { data } = res.data;
    if (!copy) setCopy(res.data.attributionHTML);

    const results = data.results.map((result: ResultApi) => ({
      id: result.id,
      name: result.name,
      description: result.description,
      image: `${result.thumbnail.path}.${result.thumbnail.extension}`,
    }));
    setMarvelCharacters((prev) => ({
      persons: results,
      pages: data.total / data.limit,
      asc: prev.asc,
    }));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    fetchApi(page);
  }, [page]);

  useEffect(() => {
    setMarvelCharacters((prev) => ({
      ...prev,
      persons: [...prev.persons].reverse(),
    }));
  }, [asc]);

  useEffect(() => {
    setFilterArray(
      persons.filter(({ name }) => name.toLowerCase().includes(search))
    );
  }, [search]);

  return (
    <>
      <Global />
      <Navbar />
      <ContainerCards>
        <Title>Characters</Title>
        <FilterContainer>
          <InputFilter
            placeholder="Characters"
            value={search}
            onChange={(event: FormEvent<HTMLInputElement>) => {
              setSearch(event.currentTarget.value);
            }}
          />
          <VscFilter size={30} color={"#ed1d24"} style={{ marginRight: 10 }} />
          <span style={{ color: "#4a4a4a", marginRight: 10 }}>A-Z</span>
          <VscChevronDown
            onClick={() =>
              setMarvelCharacters((prev) => ({ ...prev, asc: !prev.asc }))
            }
            size={30}
            style={{
              cursor: "pointer",
              transform: `rotate(${!asc ? 0 : 180}deg)`,
            }}
          />
        </FilterContainer>
        {search === ""
          ? persons.map((person) => <Card key={person.id} {...person} />)
          : filterArray.map((person) => <Card key={person.id} {...person} />)}
        <Pagination
          pageProps={{ pages, page }}
          setPage={(pageParam: number) => {
            setPage(pageParam);
          }}
        />
      </ContainerCards>
      <Footer copy={copy} />
    </>
  );
};

export default Pages;
