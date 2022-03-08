# Hoisting trong Javascript
Hoisting là cơ chế của JavaScript cho phép các khai báo biến hoặc hàm được dời lên trên đầu scope của chúng trước khi thực thi code. <br> <br>
VD: <br>
```
name = "Kien";
console.log(name);
var name;
```
Kết quả: <br>
```
Kien
```
Tuy nhiên nếu ta thay đổi biến var bằng biến let như sau:
```
name = "kien";
console.log(name);
let name;
```
Kết quả sẽ báo lỗi 
```
Uncaught ReferenceError: Cannot access 'name' before initialization
```
## Hoisting đối với hàm
### Đối với hàm trong JavaScript có hai dạng hàm đó là function declarataions và function expression :
+ Đối với function declarataions thì hoisting cũng giống như biến trong JavaScript <br>
Ví dụ:
```
hoi();
function hoi() {
    var message = "Hello world";
    document.write(message);
}
```
Hàm trên tương đương với
```
function hoi() {
    var message = "Hello world";
    document.write(message);
}
hoi();
```
+ Đối với function expression thì ngược lại, vì function expression bản chất là hàm gán cho một biến. Do đó, nó cũng giống như vừa khai báo và vừa khởi tạo biến. <br>
Thế nên, hoisting không áp dụng cho function expression.
## Thứ tự ưu tiên trong hoisting
+ ### Gán biến ưu tiên hơn khai báo hàm
Trong cơ chế hoisting, phép gán biến có độ ưu tiên hơn function declarataions:
````
        var message = "Đây là chuỗi";

        function message() {
            document.write("Đây là hàm");
        }

        document.write(typeof message);
````
Kết quả sẽ ra:
```
String
```
Chứng tỏ rằng việc ghi đè biến bằng function declarataions không thành công
+ ### Function expresstion ưu tiên hơn gán biến
Ví dụ:
````
        var message = "Đây là biến";

        var message = function() {
            document.write("Đây là hàm");
        }

        document.write(typeof message);
````
Kết quả ra là
```
function
```





