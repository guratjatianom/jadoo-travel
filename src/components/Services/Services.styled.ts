import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  margin-top: 108px;
  gap: 150px;
`;

interface CategoryItemProps {
  isActive: boolean;
}

export const CategoryItem = styled.div<CategoryItemProps>`
  width: 181px;
  height: 270px;
  padding: 20px;
  border-radius: 18px;
  background-color: ${(props) => (props.isActive ? "#F8F9FC" : "white")};
  border: ${(props) => (props.isActive ? "1px solid #62BAFF" : "1px solid transparent")};
  box-shadow: ${(props) => (props.isActive ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "none")};
  transition: all 0.3s ease;
  text-align: center;
  display: flex;         
  flex-direction: column;
  align-items: center; 
  justify-content: center;

  &:hover {
    background-color: #F8F9FC;
    border: 1px solid #62BAFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const CategoryIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  display: flex; 
  align-items: center;
  justify-content: center;
`;

