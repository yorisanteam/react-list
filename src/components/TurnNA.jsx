import React from 'react';
import ComicList from '../comiclist.json';

function turnNA() {
    let nameASIN = "https://www.amazon.co.jp/dp/";
    let Clist = [];
    let ClistNA = [];
    let result = ComicList.sort(function(a,b){
        return (a.フリガナ < b.フリガナ) ? -1 : 1;
    })
  return (
    <div className='turn'>
        {(() => {
            for(let z in result){
                if(result[z]["フリガナ"].slice(0,1) === 'ナ' || result[z]["フリガナ"].slice(0,1) === 'ニ' || result[z]["フリガナ"].slice(0,1) === 'ヌ' || result[z]["フリガナ"].slice(0,1) === 'ネ' || result[z]["フリガナ"].slice(0,1) === 'ノ'){
                    Clist = <li className='innerList'>
                        <span>
                            <a href={nameASIN + result[z]["ASIN"]} target="_blank" rel="noreferrer">{result[z]["タイトル"]}</a>
                        </span>
                        <span className='red'>
                            {"　" + ComicList[z]["ASIN"]}
                        </span></li>;
                    ClistNA.push(Clist);
                }}
            return <ul className='tableList'>{ClistNA.map((val) => <li className='outList'>{val}</li>)}</ul>;
          })()}
    </div>
  )
}

export default turnNA