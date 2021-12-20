import axios from 'axios';

const url = 'http://localhost:8888/';

class FibService {

  // Get all Fibonacci numbers
  static async getFibs() {
    let response;
    try{
      response = await axios.get(url);
    }catch(err){
      console.log(err);
    }
    return response.data
  }

  // Create a new Fibonacci number
  static async createFib(num) {
    try{
      await axios.post(url,{
        number: num
      });
    }catch(err){
      console.log(err);
    }
  }

  // Delete All Fibonacci number
  static async deleteFibs() {
    try{
      await axios.delete(url);
    }catch(err){
      console.log(err);
    }
  }
}

export default FibService;