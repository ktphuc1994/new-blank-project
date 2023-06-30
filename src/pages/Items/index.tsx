import Breadcrumb from 'antd/es/breadcrumb';
import { Link, Outlet, useLocation } from 'react-router-dom';

const breadcrumbNameMap: Record<string, string> = {
  '/items': 'Items List',
  '/items/1': 'Product 1'
};

const ItemsPage = () => {
  const location = useLocation();
  console.log({ location });
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
    };
  });

  const breadcrumbItems = [
    {
      title: <Link to='/'>Home</Link>,
      key: 'home'
    }
  ].concat(extraBreadcrumbItems);

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <Outlet />
    </div>
  );
};

export default ItemsPage;
