import React from 'react';
import './styles';
import { Title,Form, Repos} from './styles';
import {FiChevronRight} from "react-icons/fi" ;

import logo from '../../assets/logo.svg'

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositório do Github</Title>
      <Form>
        <input type="text" placeholder="username/repository_name" />
        <button type="submit"> Buscar</button>
      </Form>
      <Repos>
        <a href="/repositories" >
          <img src="https://avatars.githubusercontent.com/u/68967867?v=4" alt="Repositore" />
          <div>
            <strong>aluiziodeveloper/mini-curso-reactjs</strong>
            <p>Repositório do mini curso gratuito de reactJS</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
      </Repos>

    </>
  );
};