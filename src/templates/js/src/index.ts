function sayHello(to?: string): string {
    return `Hello, ${to ? to : "world!"}`;
}

console.log(
    sayHello()
);