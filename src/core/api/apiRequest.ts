import apiConfig from './apiConfig';

interface IPayload {
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  data: Record<string, string | number> | undefined;
}

interface IApiRequestProps {
  purpose: string;
  payload: IPayload;
}

export const apiRequest = async ({purpose, payload}: IApiRequestProps) => {
  const {method, data = {}} = payload;
  const result = await fetch(apiConfig[purpose], {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(method === 'GET' ? {} : {body: JSON.stringify(data)}),
  })
    .then(response => response.json())
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .then(data => data)
    .catch(error => {
      console.log('error = ', error);
    });
  return result;
};
