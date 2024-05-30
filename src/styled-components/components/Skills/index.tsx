import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import Icon from "../Icon/index";
import { TSkill } from "./data";

const Wrapper = styled.div`
  padding-inline: 4px;
  margin-block: ${size(6)};
`;

const Inner = styled.div`
  border: 2px solid ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${size(1.75)};
  padding: ${size(6)} ${size(4)};
  margin-inline: var(--ignore-gutter);

  box-shadow: inset rgba(0, 0, 0, 0.35) 4px 4px 30px;
  ${(props) => props.theme.breakpoint.Lg} {
    margin-inline: unset;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  gap: ${size(4)};
`;

const Item = styled.li``;

export default function Skills({ skillsData }: { skillsData: TSkill[] }) {
  const items = skillsData.map((item) => {
    return (
      <Item key={item.skill} title={item.skill}>
        <Icon imgSrc={item.imgSrc} alt={item.skill} />
      </Item>
    );
  });

  return (
    <Wrapper>
      <Inner>
        <List>
          {items.length > 0 ? (
            items
          ) : (
            <div style={{ color: "currentColor" }}>No skills found :(</div>
          )}
        </List>
      </Inner>
    </Wrapper>
  );
}
