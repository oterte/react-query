import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Quickstart from './Quickstart';

// 
const queryClient = new QueryClient();


function App() {
  return (
    // 최상위 컴포넌트에서 쿼리 클라이언트를 선언하고
    // react query를 적용하기 위해 provider로 감싸줘야 한다.
  <QueryClientProvider client={queryClient}>
    
    <Quickstart/>
  </QueryClientProvider>
  );
}



export default App;
