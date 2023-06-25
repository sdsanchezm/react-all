class TodoService {
  
  constructor(httpClient){
    this.httpClient = httpClient;
  }

  async getTodos(){
    try{
      const response = await this.httpClient.get('https://katzeconsole.website/api/data/');
      return response.json()
    } catch(err){
      console.log(err);
      throw err;
    }
  }

  async createTodo(todo){
    try{
      const response = await this.httpClient.post('https://katzeconsole.website/api/data/', todo);
      return response.json()
    } catch(err){
      console.log(err);
      throw err;
    }
  }

}

export default TodoService;