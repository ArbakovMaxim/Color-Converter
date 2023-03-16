import { ItemtColorMenu, ListNameColor } from './listColorsMenu.styled';
import colorPalette from '../../util/colorPalette';
// import { useEffect, useState } from 'react';

const ListColorMenu = ({ target }) => {
  return (
    <ListNameColor>
      {colorPalette.map(palette => (
        <ItemtColorMenu key={palette} onClick={target}>
          {palette}
        </ItemtColorMenu>
      ))}
    </ListNameColor>
  );
};

export default ListColorMenu;
