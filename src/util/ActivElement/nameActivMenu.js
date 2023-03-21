export function nameActivMenu(rightsActivMenu,
    rightsFlowerSystem,
    rightsFlowerSystemSecond,
    rightsFlowerSystemThird,
    rightsFlowerSystemFourth) {
    let activInputRights = rightsActivMenu;
    switch (rightsActivMenu) {
        case 'rightsFlowerSystem':
            activInputRights = rightsFlowerSystem;
            break;
        case 'rightsFlowerSystemSecond':
            activInputRights = rightsFlowerSystemSecond;
            break;
        case 'rightsFlowerSystemThird':
            activInputRights = rightsFlowerSystemThird;
            break;
        case 'rightsFlowerSystemFourth':
            activInputRights = rightsFlowerSystemFourth;
            break;
        default:
            console.log('Invalid name');
    }
    return activInputRights
}