import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Toast from '@radix-ui/react-toast';
import Lottie from 'lottie-react';

import { EmailAlternative } from 'components/Icons/EmailAlternative';
import { Phone } from 'components/Icons/Phone';
import { Close } from 'components/Icons/Close';
import check from 'common/assets/lordIcon/check.json';
import { ContainerForm } from './styles';
import { useForm } from './useForm';
import { Input } from './Input';

export const Form: React.FC = () => {
  const {
    focusText, onBlurText, onFocusText, onDataForm, dataForm, onSubmit, loading, toast, onToast, lottieIconCheck,
  } = useForm();

  return (
    <ContainerForm>
      <Toast.Provider swipeDirection="right">
        <div className="form">
          <h4>Mandar E-mail</h4>
          <form onSubmit={(event) => onSubmit(event)}>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Digite sei nome"
              required
              label="Nome"
              onChange={(event) => {
                onDataForm({
                  ...dataForm,
                  name: event.target.value,
                });
              }}
              value={dataForm.name}
            />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Digite sei e-mail"
              required
              label="E-mail"
              onChange={(event) => {
                onDataForm({
                  ...dataForm,
                  email: event.target.value,
                });
              }}
              value={dataForm.email}
            />
            <div className={`text_area ${focusText ? 'active' : ''}`}>
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                placeholder="Como posso ajudá-lo"
                cols={30}
                rows={5}
                onFocus={onFocusText}
                onBlur={onBlurText}
                onChange={(event) => {
                  onDataForm({
                    ...dataForm,
                    message: event.target.value,
                  });
                }}
                value={dataForm.message}
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading && (
                <div className="loader" />
              )}
              Enviar
            </button>
          </form>
        </div>
        <div className="infos">
          <h6>ou se preferir</h6>
          <div className="email">
            <Tooltip.Provider delayDuration={100}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a href="mailto:andredapperviana@gmail.com" target="_black">
                    <EmailAlternative />
                    andredapperviana@gmail.com
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="tooltip_footer" sideOffset={5} side="right">
                    <p>E-mail</p>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div className="phone">
            <Tooltip.Provider delayDuration={100}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a href="tel:5545988378294" target="_black">
                    <Phone />
                    +55 (45) 98837-8294
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="tooltip_footer" sideOffset={5} side="right">
                    <p>Telefone</p>
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </div>
        <Toast.Root
          className="toast_root"
          open={toast.open}
          onOpenChange={() => onToast({
            open: false,
            type: toast.type,
          })}
        >
          <Lottie
            lottieRef={lottieIconCheck}
            style={{
              width: 48,
              height: 48,
            }}
            animationData={check}
            loop
          />
          <Toast.Title className="title">
            <h6>E-mail enviado!</h6>
            <p>Agradeço por entrar em contato. Retornarei em breve.</p>
          </Toast.Title>
          <Toast.Action asChild altText="Goto schedule to undo">
            <button type="button">
              <Close />
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="toast_viewport" />
      </Toast.Provider>
    </ContainerForm>
  );
};
