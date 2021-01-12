import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  padding: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Content = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  margin-right: 40px;
  box-shadow: 0 48px 96px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    margin-right: 0;
  }
  :hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);

    cursor: pointer;
    transition: 0.2s;
  }
  :last-of-type {
    margin-right: 0;
    margin-bottom: 0;
  }
`;
export const Image = styled.div`
  display: flex;
  width: auto;
  height: 220px;
  background-size: cover;
  background-image: ${({ image }) => `url(${image})`};
`;
export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #0d0d0d;
  margin-bottom: 20px;
`;
export const Subtitle = styled.div`
  font-size: 15px;
  letter-spacing: 1.6px;
  line-height: 1.5;
  color: #3d3d3d;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  color: #3363ff;
  background-color: #e6ecff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  :hover {
    background-color: #dce4ff;
  }
`;
export const ContentBox = styled.div`
  background-color: #fff;
  padding: 20px;
`;
