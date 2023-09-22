import React from 'react';
import ComicList from '../comiclist.json';

function turnSA() {
    let nameASIN = "https://www.amazon.co.jp/dp/";
    let Clist = [];
    let ClistSA = [];
    let result = ComicList.sort(function(a,b){
        return (a.フリガナ < b.フリガナ) ? -1 : 1;
    })
  return (
    <div className='turn'>
        {(() => {
            for(let z in result){
                if(result[z]["フリガナ"].slice(0,1) === 'サ' || result[z]["フリガナ"].slice(0,1) === 'ザ' || result[z]["フリガナ"].slice(0,1) === 'シ' || result[z]["フリガナ"].slice(0,1) === 'ジ' || result[z]["フリガナ"].slice(0,1) === 'ス' || result[z]["フリガナ"].slice(0,1) === 'ズ' || result[z]["フリガナ"].slice(0,1) === 'セ' || result[z]["フリガナ"].slice(0,1) === 'ゼ' || result[z]["フリガナ"].slice(0,1) === 'ソ' || result[z]["フリガナ"].slice(0,1) === 'ゾ'){
                    Clist = <li className='innerList'>
                        <span>
                            <a href={nameASIN + result[z]["ASIN"]} target="_blank" rel="noreferrer">{result[z]["タイトル"]}</a>
                        </span>
                        <span className='red'>
                            {"　" + ComicList[z]["ASIN"]}
                        </span></li>;
                    ClistSA.push(Clist);
                }}
            return <ul className='tableList'>{ClistSA.map((val) => <li className='outList'>{val}</li>)}</ul>;
          })()}
    </div>
  )
}

export default turnSA