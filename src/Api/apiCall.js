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
  delete(endpoint) {
    return this.baseUrl + ""; // Corrected here
  }
}
const api = new apiCall();
export default api;
