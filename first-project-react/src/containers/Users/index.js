import React, { useState, useEffect } from "react";

import axios from "axios";

import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/clear.svg";
import Avatar from "../../assets/img-two.svg";
import {
  Button,
  Container,
  ContainerItens,
  H1,
  Image,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetcUser() {
      const { data: newUsers } = await axios.get(
        "http://localhost:3001/users"
      );

      setUsers(newUsers);
    }
    fetcUser();
  }, []);

  async function deletUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>
       
        <ul>
          {users.map((user) => (
            <User key={users.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button onClick={() => deletUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button to='/'>
        <img alt="seta" src={Arrow} /> Voltar 
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
