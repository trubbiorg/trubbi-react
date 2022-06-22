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
		this.setToken();
		return apiClient.get(this.resource);
	}

	show(id, params) {
		this.setToken();
		params = typeof(params) == 'undefined' ? {} : params;
		return apiClient.get(`${this.resource}/${id}`, params);
	}

	store(params) {
		this.setToken();
		return apiClient.post(this.resource, params);
	}

	update(id, params, method) {
		this.setToken();
		if (typeof(method) == "undefined") method = 'put';
		switch (method) {
			case "put":  return apiClient.put(`${this.resource}/${id}`, params);
			case "post":  return apiClient.post(`${this.resource}/${id}`, params);
			default: return apiClient.put(`${this.resource}/${id}`, params);
		}
	}

	destroy(id) {
		this.setToken();
		return apiClient.delete(`${this.resource}/${id}`);
	}

	lookup(route) {
		this.setToken();
		return apiClient.get(route);
	}

	patch(route) {
		this.setToken();
		return apiClient.patch(route);
	}

	setToken(){
		apiClient.defaults.headers.common = {
			"Authorization": `Bearer ${localStorage.getItem('token')}`,
			"Accept": `application/json`
		}
	}
}

export default genericDataService;