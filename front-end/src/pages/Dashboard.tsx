import { useEffect, useState } from 'react';
import DashboardMenu from '../component/DashboardMenu';
import DashboardWindow from '../component/DashboardWindow';
import { AxiosResponse } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [showContent, setShowContent] = useState<string>('');
  const [dataApiProvider, setDataApiProvider] = useState<AxiosResponse<any, any>>();
  const location = useLocation();

  location.state < 20 && useNavigate()('/');
  useEffect(() => {}, [dataApiProvider]);

  return (
    <div
      id='dashboard'
      className='h-full flex lg:flex-nowrap w-full  md:flex-nowrap sm:flex-row max-sm:flex-wrap'
    >
      <DashboardMenu
        setShowContent={setShowContent}
        setDataApiProvider={setDataApiProvider}
      />
      <DashboardWindow
        showContent={showContent}
        dataApiProvider={dataApiProvider}
        setDataApiProvider={setDataApiProvider}
      />
    </div>
  );
}
