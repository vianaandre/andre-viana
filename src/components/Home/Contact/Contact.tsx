import React, { useState } from 'react';
import { Title } from 'components/Home/Title';
import { settings } from 'config/settings';
import { Input } from 'components/Input/Input';
import { ContainerContact, ContainerContent, ContainerForm } from './styles';

export const Contact: React.FC = () => {
  const [isFocusedText, SetIsFocusedText] = useState(false);

  return (
    <ContainerContact id="contact">
      <Title title="Entrar em contato" />
      <ContainerContent>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled
          </p>
          <ul>
            <li>
              <h4>E-MAIL</h4>
              <div />
              <a
                href={`mailto:${settings.info.email}`}
                target="black"
              >
                {settings.info.email}
              </a>
            </li>
            <li>
              <h4>TELEFONE</h4>
              <div />
              <a
                href={`tel:${settings.info.phone}`}
                target="black"
              >
                {settings.info.phone}
              </a>
            </li>
            <li>
              <h4>WEBSITE</h4>
              <div />
              <a
                href={`tel:${settings.info.website}`}
                target="black"
              >
                {settings.info.website}
              </a>
            </li>
          </ul>
        </div>
        <ContainerForm>
          <Input
            error={null}
            id="name"
            name="name"
            type="text"
            placeholder="Nome completo"
          />
          <Input
            error={null}
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <Input
            error={null}
            id="subject"
            name="subject"
            type="text"
            placeholder="Assunto"
          />
          <div
            className={`textarea ${
              isFocusedText ? 'isActive' : ''
            }`}
          >
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={7}
              placeholder="Mensagem"
              onFocus={() => SetIsFocusedText(true)}
              onBlur={() => SetIsFocusedText(false)}
            />
          </div>
          <button type="submit" disabled={false}>
            ENVIANDO MENSAGEM
          </button>
        </ContainerForm>
      </ContainerContent>
    </ContainerContact>
  );
};
