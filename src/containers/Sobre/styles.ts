import styled from "styled-components";

export const SobreMim = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;
  }

  @media (max-width: 768px) {
    img {
      height: auto;
      width: 100%;
    }
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    img {
      height: auto;
      width: 80%;
    }
  }
`;
