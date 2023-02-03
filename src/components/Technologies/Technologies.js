import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of technologies in the web and mobile development world. From Design, Front-end to Back-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
        </ListContainer>
        <ListParagraph>
          Experience with <br/> React.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size = "3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
        </ListContainer>
        <ListParagraph>
          Experience with <br/> Node and Databases
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend size = "3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
        </ListContainer>
        <ListParagraph>
          Experience with <br/> Figma
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
