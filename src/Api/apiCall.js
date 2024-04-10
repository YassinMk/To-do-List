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

  async updateTask(endpoint,isCompleted){
    try{
      const resonse = await fetch(`${this.baseUrl}ListTask/${endpoint}`, {
        method:'PATCH',
        body: JSON.stringify({ completed : !isCompleted }) 

      });
      if(!resonse.ok){
        throw  new Error ('failed to update Task');
      }else{

        const  data =await resonse.json();
        return {err:null,data};
      }
    }catch(error){
      console.log(error.message)
      return {  err: error.message};
    }

  }
  async addTask(task){
    try{
      const response = await fetch(`${this.baseUrl}ListTask/`,{
        method:"POST",
        body:JSON.stringify(task),
        headers:{ 'Content-Type':'application/json'}
      });
      if (!response.ok) {
        throw  new Error('failed to  create task');
      }
      return {err:null}
    }catch(err){
      console.log(err.message)
      return {err:err.message}
    }
  }
}
const api = new apiCall();
export default api;
