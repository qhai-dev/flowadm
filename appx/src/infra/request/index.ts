import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance, InternalAxiosRequestConfig } from "axios";



export abstract class NewRequest {
    protected instance: AxiosInstance

    protected constructor(conf: AxiosRequestConfig) {
        this.instance = axios.create(conf)

        this.instance.interceptors.request.use(this.middlewareRequest, err => {
            return err
        })

        this.instance.interceptors.response.use(this.middlewareResponse,err => {
            return Promise.reject(err)
        })
    }

    protected middlewareRequest = <T>(conf: InternalAxiosRequestConfig<T>): InternalAxiosRequestConfig<T> | Promise<InternalAxiosRequestConfig<T>> =>{
            // TODO middlewareRequest 默认实现


            return Promise.resolve<InternalAxiosRequestConfig<T>>(conf)
    }

    protected middlewareResponse = <T,D>(resp: AxiosResponse<T,D>): AxiosResponse<T,D> => {
        // TODO middlewareResponse 默认实现


        return resp
    }

    public get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.instance.get(url, config);
    }

    public post<T, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
        return this.instance.post(url, data, config);
    }

    public put<T, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
        return this.instance.put(url, data, config);
    }

    public delete<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.instance.delete(url, config);
    }
}