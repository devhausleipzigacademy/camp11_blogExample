const URL = "http://localhost:3000";

export function getURL(path: string) {
	return URL + path;
}

// function delayedPromise() {
//   const delay = new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       const response = await axios.get<BlogPost[]>(URL);
//       resolve(response);
//     }, 3000);
//   });
//   return delay as Promise<{ data: BlogPost[] }>;
// }
