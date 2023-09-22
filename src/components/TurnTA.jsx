import React from 'react';
import ComicList from '../comiclist.json';

function turnTA() {
    let nameASIN = "https://www.amazon.co.jp/dp/";
    let Clist = [];
    let ClistTA = [];
    let result = ComicList.sort(function(a,b){
        return (a.フリガナ < b.フリガナ) ? -1 : 1;
    })
  return (
    <div className='turn'>
        {(() => {
            for(let z in result){
                if(result[z]["フリガナ"].slice(0,1) === 'タ' || result[z]["フリガナ"].slice(0,1) === 'ダ' || result[z]["フリガナ"].slice(0,1) === 'チ' || result[z]["フリガナ"].slice(0,1) === 'ヂ' || result[z]["フリガナ"].slice(0,1) === 'ツ' || result[z]["フリガナ"].slice(0,1) === 'ヅ' || result[z]["フリガナ"].slice(0,1) === 'テ' || result[z]["フリガナ"].slice(0,1) === 'デ' || result[z]["フリガナ"].slice(0,1) === 'ト' || result[z]["フリガナ"].slice(0,1) === 'ド'){
                    Clist = <li className='innerList'>
                        <span>
                            <a href={nameASIN + result[z]["ASIN"]} target="_blank" rel="noreferrer">{result[z]["タイトル"]}</a>
                        </span>
                        <span className='red'>
                            {"　" + ComicList[z]["ASIN"]}
                        </span></li>;
                    ClistTA.push(Clist);
                }}
            return <ul className='tableList'>{ClistTA.map((val) => <li className='outList'>{val}</li>)}</ul>;
          })()}
    </div>
  )
}

export default turnTA