import axios from "axios";

// const url = "http://localhost:5000/api/posts/";
const url = "https://aghiljose.vercel.app/api/posts/";

// const blogUrl = "http://localhost:5000/api/blogs/";
const blogUrl = "https://aghiljose.vercel.app/api/blogs/";

class ServerService {
  //Get id fur ga
  static getId() {
    return new Promise((resolve, reject) => {
      try {
        axios.get("https://aghiljose.vercel.app/ga_id").then((response) => {
          const data = response.data;
          resolve(data);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  //Get posts
  static getPortfolios() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(url).then((response) => {
          const data = response.data;
          resolve(
            data.map((post) => ({
              ...post,
            }))
          );
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  static getPortfolio(name) {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${url}${name}`).then((response) => {
          const data = response.data;
          resolve(
            data.map((post) => ({
              ...post,
            }))
          );
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  //Get Blogs
  static getBlogs() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(blogUrl).then((response) => {
          const blogData = response.data;
          blogData.map((blog) => ({
            ...blog,
          }));
          resolve(blogData.reverse());
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  static getBlog(name) {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${blogUrl}${name}`).then((response) => {
          console.log(`${blogUrl}${name}`);
          const blogData = response.data;
          resolve(
            blogData.map((blog) => ({
              ...blog,
            }))
          );
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  //Create Posts
  static insertComment(id, email, name, comment, date) {
    return axios.post(`${blogUrl}${id}`, {
      email,
      name,
      comment,
      date,
    });
  }

  //Delete Posts
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }

  // static downloadResume() {
  // 	axios.get(`${url}downloadResume`, { responseType: 'blob' }).then((response) => {
  // 		var fileURL = window.URL.createObjectURL(new Blob([response.data]));
  // 		var fileLink = document.createElement('a');
  // 		fileLink.href = fileURL;
  // 		fileLink.setAttribute('download', 'Resume_Aghil_Jose.pdf');
  // 		document.body.appendChild(fileLink);
  // 		fileLink.click();
  // 	});
  // }
}

export default ServerService;
