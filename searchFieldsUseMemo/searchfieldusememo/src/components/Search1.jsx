import { useMemo, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Search1({ someFunction }) {

    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const inputRef = useRef();

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            return item.toLowerCase().includes(query.toLowerCase())
        });
    }, [items, query]);

      function onSubmit(e) {
        e.preventDefault()
        console.log("onsubmithere");
    
        const value = inputRef.current.value;

        if (value === "") return ""

        setItems(prev => {
          return [...prev, value]
        })
    
        inputRef.current.value = ""
      }

    return (
        <>
            <Button name="b1" value="42" variant="danger" onClick={someFunction}>some</Button>
            <hr></hr>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control onChange={e => setQuery(e.target.value)} type="search" placeholder="search item" />
                    <Form.Text className="text-muted">just a random text</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Add</Form.Label>
                    <Form.Control type="text" placeholder="add item" ref={inputRef} />
                </Form.Group>
                <Button variant="primary" type="submit" > add </Button>
            </Form>
            <div className="">
                <p>Items:</p>
                {filteredItems.map((item) => (
                    <h5>{item}</h5>
                ))}
            </div>
        </>
    );
}

export default Search1;