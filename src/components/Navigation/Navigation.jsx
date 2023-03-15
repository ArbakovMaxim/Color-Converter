import { NavigationContainer, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationLink to="/">Конвертер цветов</NavigationLink>
      <NavigationLink to="/colorHtml">Цвета HTML</NavigationLink>
      <NavigationLink to="/colorWebSafe">Цвета web-safe</NavigationLink>
    </NavigationContainer>
  );
};
