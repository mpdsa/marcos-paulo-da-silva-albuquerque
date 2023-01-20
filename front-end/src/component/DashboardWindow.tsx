import { useEffect } from 'react';
import getUser from '../api/randomUser';
import { IDashboardWindow } from '../interface/IDashboard';
import DashboardWindowCat from './DashboardWindowCat';
import DashboardWindowDog from './DashboardWindowDog';
import DashboardWindowList from './DashboardWindowList';
import DashboardWindowPerson from './DashboardWindowPerson';

export function DashboardWindow(props: IDashboardWindow) {
  const { showContent, dataApiProvider, setDataApiProvider } = props;

  useEffect(() => {
    if (showContent === '') {
      getUser().then((res: any) => {
        setDataApiProvider(res.data.results);
      });
    }
  }, [showContent]);

  return (
    <div className='w-full overflow-y-auto'>
      {showContent === '' && (
        <DashboardWindowPerson
          dataApiProvider={dataApiProvider}
          setDataApiProvider={setDataApiProvider}
        />
      )}
      {showContent === 'person' && (
        <DashboardWindowPerson
          dataApiProvider={dataApiProvider}
          setDataApiProvider={setDataApiProvider}
        />
      )}
      {showContent === 'list' && <DashboardWindowList />}
      {showContent === 'cat' && <DashboardWindowCat />}
      {showContent === 'dog' && <DashboardWindowDog />}
    </div>
  );
}
