import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test',()=>{
  it('should pass',()=>{
    expect(true).to.equal(true);
  });
});

describe('index.html',()=>{
  it('should say hello',(done)=>{
   const index=fs.readFileSync('./src/index.html','utf-8');
   jsdom.env(index,(err,window)=>{
     const h1=window.document.getElementsByTagName('h1')[0];
     expect(h1.innerHTML).to.equal('Hello world');
     done();
     window.close();
   })
  })
})

describe('index.html',()=>{
  it('p tag value',(done)=>{
const index=fs.readFileSync('./src/index.html','utf-8');
jsdom.env(index,(err,window)=>{
 const p=window.document.getElementsByTagName('p')[0];
 expect(p.innerHTML).to.equal('paragraph');
done();
window.close();

})
  })
})
