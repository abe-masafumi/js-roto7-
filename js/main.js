'use strict';
{


  class Panel {
    constructor() {
      this.li = document.createElement('li');
    }
  }

  let saveNum = [];
  let active = false;
  let testcount = 0;

  const test = {};

  class Board {
    constructor() {
      this.ul = document.getElementById('board');
      this.panels = [];
      for (let i = 1; i <= 7; i++) {
      this.panels.push(new Panel());
      }
      this.conectPanel();
    }
    conectPanel() {
      this.panels.forEach(element => {
        this.ul.appendChild(element.li);
      });
    }
    createNum() {
      this.nums = [];
      for (let i = 1; i <= 37; i++) {
        this.nums.push(i);
      }
    }
    set() {
      this.panels.forEach(element => {
       
        this.roto = this.nums.splice(Math.floor(Math.random() * this.nums.length), 1)[0];
        element.li.textContent = this.roto;
        saveNum.push(this.roto);
      });
      const today = new Date();

      saveNum.push(today.getFullYear()+"年"+(today.getMonth()+1)+"月"+ today.getDate()+"日");
      console.log(saveNum);

    }
  }
  
  const board = new Board();
  const btn = document.getElementById('btn');
  btn.addEventListener('click',() => {
    saveNum = [];
    board.createNum()
    board.set();
    save.classList.remove('inactive');
  });

  const board2 = document.getElementById('board2');
  const save = document.getElementById('save');
  save.addEventListener('click', () => {
    console.log(saveNum);

   const listNum = document.createElement('li');
  //  const del = document.createElement('div');
  //  del.textContent = "X";
    listNum.textContent = `${saveNum[0]} - ${saveNum[1]} - ${saveNum[2]} - ${saveNum[3]} - ${saveNum[4]} - ${saveNum[5]} - ${saveNum[6]} ------>> ${saveNum[7]}`;
    board2.insertBefore(listNum, board2.children[0]);
    // listNum.appendChild(del);
    save.classList.add('inactive');
    // カウントの数字
    test["nomber"] = saveNum;
    console.log(test);
    testcount++;
    // カウントの保存
    localStorage.setItem("testes", testcount);
    // ロトのデータを保存
    const jsonData = JSON.stringify(test); // dataをJSON形式に変換
    console.log(jsonData);
    localStorage.setItem(testcount, jsonData);
  });
  // カウント数字の戻し
  const testes = localStorage.getItem('testes');
  const nomdata = JSON.parse(testes);
  testcount += nomdata;
  console.log(nomdata);

  // ロトデータの戻し
  for (let i = 1; i < localStorage.length; i++) {
     const jsonData = localStorage.getItem(i);
     const saveNum = JSON.parse(jsonData);
     console.log(saveNum);
     const listNum = document.createElement('li');
    listNum.textContent = `${saveNum.nomber[0]} - ${saveNum.nomber[1]} - ${saveNum.nomber[2]} - ${saveNum.nomber[3]} - ${saveNum.nomber[4]} - ${saveNum.nomber[5]} - ${saveNum.nomber[6]} ------>> ${saveNum.nomber[7]}`;
    board2.insertBefore(listNum, board2.children[0]);
    save.classList.add('inactive');
  }


  
  // for (let i=0; i < 20; i++) {
  // localStorage.clear();

  // }
}
