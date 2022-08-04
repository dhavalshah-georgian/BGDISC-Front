import { Injectable } from "@angular/core";

@Injectable()

export class UtilityService {
    
    public static convertObjectToJson(res: any): any {
        return JSON.parse(JSON.stringify(res.body));
    }
    
    public static setLocalStorage(property: string, value: string): void {
        localStorage.setItem(property, value);
    }
    
    public static setMultiLocalStorage(array: any): void {
        array.forEach((item: any) => {
            localStorage.setItem(item[0], item[1]);
        });
    }
    
    public static getLocalStorage(property: string): void  {
        if (localStorage.getItem(property)) {
            localStorage.getItem(property);
        }
    }
    
    public static removeItemLocalStorage(property: string) {
        if (localStorage.getItem(property)) {
            localStorage.removeItem(property);
        }
    }
    
    public static clearLocalStorage() {
        localStorage.clear();
    }
}