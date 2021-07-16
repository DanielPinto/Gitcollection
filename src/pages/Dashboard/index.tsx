import React from 'react';
import './styles';
import { Title,Form} from './styles';

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

    </>
  );
};