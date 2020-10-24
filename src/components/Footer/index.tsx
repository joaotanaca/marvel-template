import React from "react";

import { Container } from "./styles";

const Footer = (props: { copy: string }) => {
  return <Container dangerouslySetInnerHTML={{ __html: props.copy }} />;
};

export default Footer;
