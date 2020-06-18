import './css/main.css';
import './index.html';

const test = async (args) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 2000);
  });
  console.log(promise);
  const { a, b } = args;

  const result = await promise; // wait until the promise resolves (*)

  console.log(result, a, b); // "done!"
  console.log(promise);
};

test({ a: 1, b: 2 });
