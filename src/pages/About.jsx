import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper className="page">
      <h3>about Us</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sint
        tempora ad repellendus ea id optio nam quos tenetur repudiandae. Velit,
        reiciendis! Molestiae, excepturi autem pariatur rerum ipsum sint ipsam
        sunt ad esse. Est deleniti hic eum modi illum? Atque impedit quis
        accusamus fugiat aperiam enim magnam hic earum? Dolorum tempore
        voluptates voluptatibus saepe consectetur ipsum non commodi quis officia
        rerum aperiam, dolores ipsam facilis voluptatum? Obcaecati expedita
        alias libero a, fugit atque eum veniam dolor quod, quasi eveniet, iure
        cum ipsa modi qui beatae! Esse, totam reiciendis quis aliquam modi
        facilis ipsa, voluptas dignissimos odit quaerat itaque consequuntur
        suscipit.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;
export default About;
