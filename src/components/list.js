import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function List(props) {
const [data, setData] = useState([{nome: 'marina', email: 'marina@gamil.com', id: 90}]);
// console.log(data)
  useEffect(() => {
    (async () => {
      let items = await axios.get(`http://localhost:5000/usuarios/list`);
    //   console.log(items)
      if (items) {
        setData(items.data);
        // console.log(items);
      } else {
        console.log("erro");
        // return navigate("/auth");
      }
    })();
  }, [data]);


  const filteredData = data.filter((el) => {
         //if no input the return the original
        //  console.log(el)
         if (props.input === '') {
             return console.log("nada");
         }
         //return the item which contains the user input
         else {
             return el.nome.toLowerCase().includes(props.input)
         }
     })

  const navigate = useNavigate();

    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.email}>{item.nome}</li>
            ))}
        </ul>
    )
}


export default List