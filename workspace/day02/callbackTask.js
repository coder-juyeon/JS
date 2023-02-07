// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// 3. A함수는 B함수를 callback함수로 전달받는다.


pay("하리보", 2000, 5, function(name, total){
    console.log(`${name}: ${total}원`);
})

function pay(name, cost, count, callback) {
    if(callback){
        var total = cost * count;
        callback(name, total);
        return;
    }
    return total;
}

