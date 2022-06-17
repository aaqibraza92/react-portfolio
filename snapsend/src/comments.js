//   getBeers = async () => {
//     const settings = {
//       mode: "cors",
//       method: "POST",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:3001',
//       },
//       body: JSON.stringify(this.dfg),
//     };
//     console.log(JSON.stringify(this.dfg));
//     const response = await fetch("http://127.0.0.1:8081/process_post/", settings);
//     const data = await response.json();
//     console.log(data);
//   }