var tbody = document.querySelector('#table tbody');
var dataset = [];
var flag = false;
var 열은칸 = 0;
document.querySelector('#exec').addEventListener('click', function () {
  //내부 먼저 초기화
  tbody.innerHTML = '';
  document.querySelector('#result').textContent = '';
  dataset = [];
  flag = false;
  var hor = parseInt(document.querySelector('#hor').value);
  var ver = parseInt(document.querySelector('#ver').value);
  var mine = parseInt(document.querySelector('#mine').value);

  //지뢰 위치 뽑기
  var candidates = Array(hor * ver)
      .fill()
      .map(function (el, idx) {
        return idx;
      });
  var shuffle = [];
  while (candidates.length > 80) {
    var movement = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
    shuffle.push(movement);
  }

  for (var i = 0; i < ver; i += 1) {
    var arr = [];
    var tr = document.createElement('tr');
    dataset.push(arr);
    for (var j = 0; j < hor; j += 1) {
      arr.push(1);
      var td = document.createElement('td');

      td.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        if(flag) {return;}
        var 부모tr = e.currentTarget.parentNode;
        var 부모tbody = e.currentTarget.parentNode.parentNode;
        var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
        var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);

        if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
          e.currentTarget.textContent = '!';
        } else if (e.currentTarget.textContent === '!') {
          e.currentTarget.textContent = '?';
        } else if (e.currentTarget.textContent === '?') {
          if (dataset[줄][칸] === 1) {
            e.currentTarget.textContent = '';
          } else if (dataset[줄][칸] === 'X') {
            e.currentTarget.textContent = 'X';
          }
        }
      });
      td.addEventListener('click', function (e) {
        if(flag) {return;}
        var 부모tr = e.currentTarget.parentNode;
        var 부모tbody = e.currentTarget.parentNode.parentNode;
        var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
        var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
        // if(dataset[줄][칸] === 1) { return; }

        e.currentTarget.classList.add('opened');
        열은칸 += 1;
        if (dataset[줄][칸] === 'X') {
          e.currentTarget.textContent = '펑';
          document.querySelector('#result').textContent = '실패';
          flag = true;
        } else {
          dataset[줄][칸] = 1;
          var 주변 = [
            dataset[줄][칸 - 1], dataset[줄][칸 + 1],
          ];
          if (dataset[줄 - 1]) {
            주변 = 주변.concat(dataset[줄 - 1][칸 - 1], dataset[줄 - 1][칸], dataset[줄 - 1][칸 + 1])
          }
          if (dataset[줄 + 1]) {
            주변 = 주변.concat(dataset[줄 + 1][칸 - 1], dataset[줄 + 1][칸], dataset[줄 + 1][칸 + 1])
          }
          console.log('주변: ', 주변);

          var 주변지뢰개수 = 주변.filter(function(y) {
            return y === 'X';
          }).length;
          console.log(주변지뢰개수);
          e.currentTarget.textContent = 주변지뢰개수 || '';
          //dataset[줄][칸]=1;
          var 주변칸 = [];
          if(주변지뢰개수 === 0) {
            console.log('주변을 엽니다.');
            if(tbody.children[줄 - 1]) {
              주변칸 = 주변칸.concat([
                tbody.children[줄 - 1].children[칸 - 1],
                tbody.children[줄 - 1].children[칸],
                tbody.children[줄 - 1].children[칸 + 1],
              ]);
            }
            주변칸 = 주변칸.concat([
              tbody.children[줄].children[칸 - 1],
              tbody.children[줄].children[칸 + 1],
            ]);
            if(tbody.children[줄 + 1]) {
              주변칸 = 주변칸.concat([
                tbody.children[줄 + 1].children[칸 - 1],
                tbody.children[줄 + 1].children[칸],
                tbody.children[줄 + 1].children[칸 + 1],
              ]);
            }
            // 주변칸.filter(function(v) {
            //   return !!v;
            // }).forEach(function(옆칸){
            //   옆칸.click();
            // });
            주변칸.filter(function(v){
              return !!v;
            }).forEach(function(옆칸) {
              var 부모tr = 옆칸.parentNode;
              var 부모tbody = 옆칸.parentNode.parentNode;
              var 옆칸칸 = Array.prototype.indexOf.call(부모tr.children, 옆칸);
              var 옆칸줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
              if(dataset[옆칸줄][옆칸칸] !== 1) {
                옆칸.click();
              }
            });
          }
        }
        // if(열은칸 === hor * ver - mine) {
        //   flag = true;
        //   document.querySelector('#result').textContent = '승리~';
        // }
      });
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  for (var k = 0; k < shuffle.length; k++) {
    var 세로 = Math.floor(shuffle[k] / 10);
    var 가로 = shuffle[k] % 10;
    tbody.children[세로].children[가로].textContent = 'X';
    dataset[세로][가로] = 'X';
  }
});
