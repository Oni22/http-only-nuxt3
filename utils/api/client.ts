import type { FetchOptions } from 'ofetch'

export default class Client {
  options?: FetchOptions
  baseUrl : string

  constructor(baseUrl: string, options?: FetchOptions) {
    this.options = options
    this.baseUrl = baseUrl
  }


  async raw<T>(url: string, method: "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "get" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "options" | "trace" | undefined, options?: FetchOptions) {
    try {
      const data = await $fetch.raw<T>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method
      })

      return data
    } catch (err) {
      return Promise.reject(err)
    }
  }

  async post<T>(url: string,options?: FetchOptions) {
    try {
      const data = await $fetch<T>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: 'POST'
      })

      return data
    } catch (err) {
      return Promise.reject(err)
    }
  }

  async get<T>(url: string, options?: FetchOptions) {
    try {
      const data = await $fetch<T>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: 'GET'
      })
      return data
    } catch (err) {
      return Promise.reject(err)
    }
  }

  async put<T>(url: string, options?: FetchOptions) {
    try {
      const data = await $fetch<T>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: 'PUT'
      })

      return data
    } catch (err) {
      return Promise.reject(err)
    }
  }

  async delete<T>(url: string, options?: FetchOptions) {
    try {
      const data = await $fetch<T>(`${this.baseUrl}${url}`, {
        ...options,
        ...this.options,
        method: 'DELETE'
      })

      return data
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
