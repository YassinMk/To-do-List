class apiCall {
  constructor() {
    this.baseUrl = "http://localhost:8000/";
  }
  getAll() {
    return this.baseUrl + "ListTask";
  }
  getNotComplete() {
    return this.baseUrl + "ListTask?completed=0"; // Corrected here
  }
  getComplete() {
    return this.baseUrl + "ListTask?completed=1";
  }
  async delete(endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      let res = null;
      if (response.headers.get('content-type').includes('application/json')) {
        res = await response.json();
      }
  
      return { err: null };
    } catch (error) {
      console.log(error.message);
      return {  err: error.message };
    }
  }
}
const api = new apiCall();
export default api;
