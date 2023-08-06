import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: blue;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
`;

const Sidebar = () => {
  return (
    <div>
      <StyledSidebar>SIDEBAR</StyledSidebar>
    </div>
  );
};
export default Sidebar;
