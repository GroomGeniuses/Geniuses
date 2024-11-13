import TextButton from '../components/TextButton';
import { testApi } from '../_api/api';
export default function Test() {
  return (
    <div>
      <TextButton
        type="button"
        text="TestGet"
        onClick={() => {
          testApi.testJWTGet();
        }}
      />
      <TextButton
        type="button"
        text="TestPost"
        onClick={() => {
          testApi.testJWTPost({ data: 'testPost' });
        }}
      />
      <TextButton
        type="button"
        text="TestPut"
        onClick={() => {
          testApi.testJWTPut({ data: 'testPut' });
        }}
      />
      <TextButton
        type="button"
        text="TestPatch"
        onClick={() => {
          testApi.testJWTPatch({ data: 'testPatch' });
        }}
      />
      <TextButton
        type="button"
        text="TestDelete"
        onClick={() => {
          testApi.testJWTDelete();
        }}
      />
    </div>
  );
}
