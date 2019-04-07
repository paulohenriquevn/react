import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Input from '../../Input/input.component';
import { HeaderStyle } from './header.style';

const Header = props => (
  <HeaderStyle>
    <Container>
      <Row>
        <Col>
          <Input placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        </Col>
      </Row>
    </Container>
  </HeaderStyle>
);

export default Header;
