// wrap promise function which gives us the current state of the promise of being
// 'pending'/'error'/'success'.

export const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise().then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      else if (status === "error") throw result;
      else if (status === "success") return result;
    },
  };
};
