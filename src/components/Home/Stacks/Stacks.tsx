import React from 'react';
import { Title } from 'components/Home/Title';
import { CardStack } from 'components/Home/CardStack';
import HtmlAndCss from 'common/assets/htmlandcss.png';
import Javascript from 'common/assets/javascript.png';
import Typescript from 'common/assets/typescript.png';
import ReactPhoto from 'common/assets/react.png';
import Next from 'common/assets/next.png';
import Node from 'common/assets/node.png';
import { ContainerStacks, ContainerListStacks } from './styles';

export const Stacks: React.FC = () => {
    return (
        <ContainerStacks>
            <Title title="Tecnologias" />
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever{' '}
            </p>
            <div className="list-stacks">
                <ContainerListStacks>
                    <CardStack title="HTML + CSS" image={HtmlAndCss} />
                    <CardStack title="Javascript" image={Javascript} />
                    <CardStack title="Typescript" image={Typescript} />
                </ContainerListStacks>
                <ContainerListStacks>
                    <CardStack
                        title="ReactJs/React Native"
                        image={ReactPhoto}
                    />
                    <CardStack title="NextJs" image={Next} />
                    <CardStack title="NodeJs" image={Node} />
                </ContainerListStacks>
            </div>
        </ContainerStacks>
    );
};
