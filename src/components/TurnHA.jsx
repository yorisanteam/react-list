import React from 'react';
import ComicList from '../comiclist.json';

function turnHA() {
    let nameASIN = "https://www.amazon.co.jp/dp/";
    let Clist = [];
    let ClistHA = [];
    let result = ComicList.sort(function(a,b){
        return (a.フリガナ < b.フリガナ) ? -1 : 1;
    })
  return (
    <div className='turn'>
        {(() => {
            for(let z in result){
                if(result[z]["フリガナ"].slice(0,1) === 'ハ' || result[z]["フリガナ"].slice(0,1) === 'バ' || result[z]["フリガナ"].slice(0,1) === 'パ' || result[z]["フリガナ"].slice(0,1) === 'ヒ' || result[z]["フリガナ"].slice(0,1) === 'ビ' || result[z]["フリガナ"].slice(0,1) === 'ピ' || result[z]["フリガナ"].slice(0,1) === 'フ' || result[z]["フリガナ"].slice(0,1) === 'ブ' || result[z]["フリガナ"].slice(0,1) === 'プ' || result[z]["フリガナ"].slice(0,1) === 'ヘ' || result[z]["フリガナ"].slice(0,1) === 'ベ' || result[z]["フリガナ"].slice(0,1) === 'ペ' || result[z]["フリガナ"].slice(0,1) === 'ホ' || result[z]["フリガナ"].slice(0,1) === 'ボ' || result[z]["フリガナ"].slice(0,1) === 'ポ'){
                    Clist = <li className='innerList'>
                        <span>
                            <a href={nameASIN + result[z]["ASIN"]} target="_blank" rel="noreferrer">{result[z]["タイトル"]}</a>
                        </span>
                        <span className='red'>
                            {"　" + ComicList[z]["ASIN"]}
                        </span></li>;
                    ClistHA.push(Clist);
                }}
            return <ul className='tableList'>{ClistHA.map((val) => <li className='outList'>{val}</li>)}</ul>;
          })()}
    </div>
  )
}

export default turnHA