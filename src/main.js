import './css/main.css';
import './index.html';

const a = async (args) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000)
  });
  console.log(promise);
  const {a, b} = args;

  let result = await promise; // wait until the promise resolves (*)

  console.log(result, a, b); // "done!"
  console.log(promise);
}

a({a: 1, b: 2});
