import { useState, useEffect } from "react";
import Comp1 from "./components/Comp1";

function App() {

    const initialObject = [
        {
            id: 0,
            name: "",
            age: 0
        }
    ]

    const [data, setData] = useState([{...initialObject}]);

    const obj1 = [
        {
            id: 1,
            name: "jamecho",
            age: 21
        },
        {
            id: 2,
            name: "jara",
            age: 22
        },
        {
            id: 3,
            name: "tiche",
            age: 23
        },
    ]

    // this event brings only the informatio nfrom the button, not from the rest of the components
    function handleLog1(event, id) {
        const { value } = event.target;
        console.log(value * 3);
        console.log(value);
        console.log("Button ID:", id);
    }

    function handleLog4(namex){
        console.log(`hallo ${namex}`);
    }

    function handleLog3(e) {
        
        const newRecord = {
            "f1x": data.f1,
            "f2x": data.f2,
            "kx": data.kx,
            "asd": data.asd,
            "buttonid": e.target.value
        }

        console.log(newRecord);
        // console.log("Button ID:", value); // Log the button's id

    }


    function handleChange(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    function handleLog5(e){
        console.log("event: ", e.target);
    }

    useEffect( () => {
        // handleLog3()
        
    }, []);

    return (
        <div className="App">
            <p>asd</p>
            {obj1.map((item) => (
                <p key={item.id} name="kx" value={item.id}>{item.id} - {item.name} -
                    <select name="f1" onChange={handleChange}>
                        <option value="">select</option>
                        <option value="10">10</option>
                        <option value="20" defaultValue="44">20</option>
                        <option value="30">30</option>
                    </select>
                    <select name="f2" onChange={handleChange}>
                    <option value="">select</option>
                        <option value="80">80</option>
                        <option value="70">70</option>
                        <option value="60">60</option>
                    </select>
                    {/* <button onClick={ handleLog1 } name="asd" value={item.id}>get</button></p>  */}
                    <button onClick={ (e) => handleLog1(e, item.id) } name="asd" value={item.id}>h1-get</button>
                    <button onClick={ (e) => handleLog3(e) } name="buttonid" value={item.id}>h3-load object</button>
                    <button onClick={ () => handleLog4('kraus') } name="qwer" value={item.id}>h4-console Log</button>
                    {/* the next button has to be clicked and it is not auto executed after refresh */}
                    <button onClick={ () => handleLog4(item.id) } name="zxc" value={item.id}>h4-item.id</button>
                    {/* the next button is auto calling the handleLog4 function after refresh/load the entire page */}
                    <button onClick={ handleLog4('auto click in refresh') } name="zxc" value={item.id}>h4-auto</button>
                    <button onClick={ (e) => handleLog5(e) } name="zxcv" value={item.id}>h5-event</button>
                    </p>
            ))}
        </div>
    );
}

export default App;
