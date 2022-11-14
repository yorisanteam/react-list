import React from 'react';
import ComicList from '../comiclist.json';

function turnWA(props) {
  let nameASIN = "https://www.amazon.co.jp/dp/";
    let Clist = [];
    let ClistA = [];
    let result = ComicList.sort(function(a,b){
        return (a.フリガナ < b.フリガナ) ? -1 : 1;
    })
  return (
    <div className='turn'>
        {(() => {
            for(let z in result){
                if(result[z]["フリガナ"].slice(0,1) === 'ワ' || result[z]["フリガナ"].slice(0,1) === 'ヲ' || result[z]["フリガナ"].slice(0,1) === 'ン'){
                    Clist = <li className='innerList'>
                      <span>
                            <a href={nameASIN + result[z]["ASIN"]} target="_blank" rel="noreferrer">{result[z]["タイトル"]}</a>
                        </span>
                        <span className='red'>
                          {"　" + ComicList[z]["ASIN"]}
                        </span></li>;
                    ClistA.push(Clist);
                }}
            return <ul className='tableList'>{ClistA.map((val) => <li className='outList'>{val}</li>)}</ul>;
          })()}
    </div>
  )
}

export default turnWA