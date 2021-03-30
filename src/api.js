import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000/api';

class MicroblogApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
      ? data
      : {};

    try {
      let res = await axios({ url, method, data, params });
      return res.data;
    } catch (err) {
      console.error("API Error:", err.response);
      if (err.response) {
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
      else {
        let message = 'No connection to the server!';
        throw Array.isArray(message) ? message : [message];
      }
    }
  }

  static async getPosts() {
    let posts = await this.request(`posts`);
    return posts;
  }

  static async getPost(id) {
    try {
      let post = await this.request(`posts/${id}`);
      if (post === '') throw new Error('Not Found');
      return post;
    }
    catch (err) {
      let message = err.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async upvotePost(id) {
    let post = await this.request(`posts/${id}/vote/up`, {}, 'POST');
    return post;
  }

  static async downvotePost(id) {
    let post = await this.request(`posts/${id}/vote/down`, {}, 'POST');
    return post;
  }

  static async addComment(id, data) {
    let comment = await this.request(`posts/${id}/comments`, data, 'POST');
    return comment;
  }

  static async deleteComment(postId, commentId) {
    await this.request(`posts/${postId}/comments/${commentId}`, {}, 'DELETE');

  }

  static async addPost(data) {
    let post = await this.request(`posts`, data, 'POST');
    return post;
  }

  static async updatePost(id, data) {
    let post = await this.request(`posts/${id}`, data, 'PUT');
    return post;
  }

  static async deletePost(id) {
    await this.request(`posts/${id}`, {}, 'DELETE');
  }
}

export default MicroblogApi