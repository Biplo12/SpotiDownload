import { useRouter } from 'next/router';

const useUserTokens = () => {
  const query = useRouter();
  const { access_token, refresh_token } = query.query;
  return { access_token, refresh_token };
};

export default useUserTokens;
