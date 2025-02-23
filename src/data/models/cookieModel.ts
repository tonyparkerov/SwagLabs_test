export default class Cookie {
    name = 'session-username';
    value: string;
    domain = 'www.saucedemo.com';
    path = '/';
    
    constructor(value: string) {
        this.value = value;
    }
}