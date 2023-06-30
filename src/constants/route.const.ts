interface InterfaceRouteInfo {
  title: string;
  key: string;
}

const ROUTES: Record<string, InterfaceRouteInfo> = {
  '/': {
    title: 'Home',
    key: 'home'
  },
  '/auction': {
    title: 'Auction',
    key: 'auction'
  },
  '/items': {
    title: 'Items',
    key: 'items'
  },
  '/items/:itemId': {
    title: 'Items',
    key: 'items'
  }
};

export default ROUTES;
