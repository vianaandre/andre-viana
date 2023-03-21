import React from 'react';

import { Container } from 'components/Container';
import { ContainerContact } from './styles';
import { Form } from './Form';

export const Contact: React.FC = () => {
  return (
    <ContainerContact>
      <Container>
        <div className="content">
          <h2 className="title">Me mande um E-mail.</h2>
          <p>
            Entre em contato comigo para tirar
            {' '}
            <strong>dúvidas</strong>
            , dar
            {' '}
            <strong>sugestões</strong>
            {' '}
            ou fazer um
            {' '}
            <strong>elogio</strong>
            . Estou sempre pronto para atendê-lo da melhor maneira possível. Utilize o
            {' '}
            <strong>formulário</strong>
            {' '}
            abaixo ou envie um e-mail diretamente para meu endereço de contato.
          </p>
          <Form />
        </div>
      </Container>
    </ContainerContact>
  );
};
