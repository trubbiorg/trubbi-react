import apiClient from './apiClient.jsx'

class genericDataService {

  constructor(_resource)
  {
		this.resource = _resource;
		this.query = {}
		this.columns = {}
		this.title = "";
  }

	index () {
		return apiClient.get(this.resource);
	}

	show(id, params) {
		params = typeof(params) == 'undefined' ? {} : params;
		return apiClient.get(`${this.resource}/${id}`, params);
	}

	store(params) {
		return apiClient.post(this.resource, params);
	}

	update(id, params, method) {
		if (typeof(method) == "undefined") method = 'put';
		switch (method) {
			case "put":  return apiClient.put(`${this.resource}/${id}`, params);
			case "post":  return apiClient.post(`${this.resource}/${id}`, params);
			default: return apiClient.put(`${this.resource}/${id}`, params);
		}
	}

	destroy(id) {
		return apiClient.delete(`${this.resource}/${id}`);
	}
}

export default genericDataService;