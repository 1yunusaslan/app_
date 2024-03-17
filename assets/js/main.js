/* navbar,footer içerisindeki linkleri js tarafında bi dizi içerisinde tanımlayıp onları html tarafında yazdırsın. */

var deger = [];
const master = document.querySelectorAll(".link");
for (let i = 0; i < master.length; i++) {
     deger.push(master[i]);   
const create = document.createElement("a");
const textNode = document.createTextNode(deger.values);
create.appendChild(textNode);

}
console.log(deger);



