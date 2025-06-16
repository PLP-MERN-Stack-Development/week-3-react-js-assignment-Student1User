import { Post, User } from '../types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Add timeout and retry logic for better reliability
const fetchWithTimeout = async (url: string, timeout = 10000): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { 
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

export const api = {
  async getPosts(limit?: number): Promise<Post[]> {
    try {
      const url = limit ? `${API_BASE_URL}/posts?_limit=${limit}` : `${API_BASE_URL}/posts`;
      const response = await fetchWithTimeout(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      throw new Error('Failed to fetch posts. Please check your internet connection and try again.');
    }
  },

  async getPost(id: number): Promise<Post> {
    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/posts/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch post ${id}:`, error);
      throw new Error(`Failed to fetch post ${id}. Please try again.`);
    }
  },

  async getUsers(): Promise<User[]> {
    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/users`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw new Error('Failed to fetch users. Please check your internet connection and try again.');
    }
  },

  async getUser(id: number): Promise<User> {
    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/users/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch user ${id}:`, error);
      throw new Error(`Failed to fetch user ${id}. Please try again.`);
    }
  },

  async searchPosts(query: string): Promise<Post[]> {
    try {
      const posts = await this.getPosts();
      const searchTerm = query.toLowerCase().trim();
      
      if (!searchTerm) return posts;
      
      return posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.body.toLowerCase().includes(searchTerm)
      );
    } catch (error) {
      console.error('Failed to search posts:', error);
      throw new Error('Failed to search posts. Please try again.');
    }
  },
};