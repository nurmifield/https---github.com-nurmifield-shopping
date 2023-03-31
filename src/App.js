const API_URL = "http://localhost:3002/index.php";

function App()
  const [items, setItems] = React.useState([]);
  const [newItem, setNewItem] = React.useState("");
  const [newAmount, setNewAmount] = React.useState(1);

  React.useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { description: newItem, amount: newAmount };
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        setItems([...items, data]);
        setNewItem("");
        setNewAmount(1);
      });
  }