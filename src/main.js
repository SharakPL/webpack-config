import './css/main.css';
import './index.html';

const a = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000)
  });
  console.log(promise);

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
  console.log(promise);
}

a();
