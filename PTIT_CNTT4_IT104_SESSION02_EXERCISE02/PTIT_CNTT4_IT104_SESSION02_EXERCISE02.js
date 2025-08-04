function greetingWithWeather(name, weather) {
    if(weather === "sunny"){
        return `Xin chao ${name}, hom nay troi nang tuyet voi!`;
    }
    else if(weather === "rainy"){
        return `Xin chao ${name}, hom nay troi mua, hay mang theo o!`;
    }
    else {
        return `Xin chao ${name}, thoi tiet hom nay khong xac dinh!`;
    }
}
console.log(greetingWithWeather("Nguyen Van A", "sunny"));
console.log(greetingWithWeather("Nguyen Van B", "rainy"));
console.log(greetingWithWeather("Nguyen Van C", "cloudy"));