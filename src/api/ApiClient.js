class ApiClient {
  #baseUrl;

  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  get = async (resource = "/") => {
    const url = this.#baseUrl + resource;
    const response = await fetch(url);
    return response.json()
  };
}

export default new ApiClient();
