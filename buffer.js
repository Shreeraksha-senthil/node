//concatenation operation
var buf1=Buffer.from('HELLO ');
var buf2=Buffer.from('TO KSRCT');
var buf=Buffer.concat([buf1,buf2]);
console.log(buf.toString());
//slice operation
var y=buf1.slice(0,4);
console.log(y.toString());
//JSON FORMATE
console.log(buf1.toJSON());
//read and write operation in buffer
//read msg and write msg operation
var b1=Buffer.alloc(25);
var msg='hello';
b1.write(msg,'utf-8');
var readmsg=msg.toString();
console.log(readmsg);
//copy from one buffer to another buffer
buf2.copy(buf1);
console.log(buf1.toString());
//length of buffer
console.log(buf1.length);