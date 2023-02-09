let datas = [20, 3, 6, 12, 65];
datas.push(21);
console.log(datas);

datas.map(function(data){return data / 2;}).forEach(data => console.log(data));