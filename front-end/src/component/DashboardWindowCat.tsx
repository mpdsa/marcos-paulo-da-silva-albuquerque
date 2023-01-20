import { useState } from 'react';
import getHttpStatusCode from '../api/catHttpStatusCode';
import { codes } from '../api/statusCodes';

export default function DashboardWindowCat() {
  const [httpImageBase64, setHttpImageBase64] = useState('');

  return (
    <div className='w-full items-center justify-center flex flex-col h-full'>
      {httpImageBase64 ? (
        <div className='drop-shadow-xl w-1/2 max-w-3xl h-auto'>
          <ImageBase64 className='' src={httpImageBase64} />
        </div>
      ) : (
        <div className=' bg-slate-400 w-1/2 h-1/2'></div>
      )}
      <div className='mt-10 flex flex-col gap-2 p-3 items-center w-1/4'>
        <p>Selecione uma opção</p>
        <select
          className='w-fit'
          onChange={(e) => {
            if (e.target.value === '') {
              getHttpStatusCode(404).then((result) => {
                setHttpImageBase64(result?.data);
              });
            } else {
              getHttpStatusCode(parseInt(e.target.value)).then((result) => {
                setHttpImageBase64(result?.data);
              });
            }
          }}
        >
          <option defaultChecked={true}></option>
          {codes.map((item) => {
            return (
              <option key={item.status} value={item.status}>
                {item.status} {': '}
                {item.message}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

const ImageBase64 = (props: { src: string; className: string }) => {
  return <img className={props.className} src={`data:image/jpeg;base64, ${props.src}`} />;
};
