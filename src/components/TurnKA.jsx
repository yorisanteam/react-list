import React from 'react';
import ComicList from '../comiclist.json';

function turnKA() {
    let nameASIN = "https://www.amazon.co.jp/dp/";
    let Clist = [];
    let ClistKA = [];
    let result = ComicList.sort(function(a,b){
        return (a.フリガナ < b.フリガナ) ? -1 : 1;
    })
  return (
    <div className='turn'>
        {(() => {
            for(let z in result){
                if(result[z]["フリガナ"].slice(0,1) === 'カ' || result[z]["フリガナ"].slice(0,1) === 'ガ' || result[z]["フリガナ"].slice(0,1) === 'キ' || result[z]["フリガナ"].slice(0,1) === 'ギ' || result[z]["フリガナ"].slice(0,1) === 'ク' || result[z]["フリガナ"].slice(0,1) === 'グ' || result[z]["フリガナ"].slice(0,1) === 'ケ' || result[z]["フリガナ"].slice(0,1) === 'ゲ' || result[z]["フリガナ"].slice(0,1) === 'コ' || result[z]["フリガナ"].slice(0,1) === 'ゴ'){
                    Clist = <li className='innerList'>
                      <span>
                        <a href={nameASIN + result[z]["ASIN"]} target="_blank" rel="noreferrer">{result[z]["タイトル"]}</a>
                      </span>
                      <span className='red'>
                        {"　" + ComicList[z]["ASIN"]}
                      </span></li>;
                    ClistKA.push(Clist);
                }}
            return <ul className='tableList'>{ClistKA.map((val) => <li className='outList'>{val}</li>)}</ul>;
          })()}
    </div>
  )
}

export default turnKA