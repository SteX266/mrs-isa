import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useFetch } from "../utilities";
import FilterModal from "./FilterModal";

function SearchBar({ setServices }) {
  const [searchField, setSearchField] = useState("");
  const [filters, setFilters] = useState({});
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };
  const search = () => {
    setServices(
      useFetch("entity/search", {
        searchField: searchField,
        filtersDTO: filters,
      })
    );
    console.log(filters);
    console.log(searchField);
  };
  const onFieldChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control
        type="search"
        placeholder="Search..."
        onChange={onFieldChange}
      />

      <Button onClick={search} variant="outline-dark">
        Search
      </Button>
      <Button onClick={toggleModal} variant="outline-dark">
        Filters
      </Button>
      <FilterModal
        setState={setFilters}
        show={show}
        toggleModal={toggleModal}
      />
    </Stack>
  );
}

export default SearchBar;
