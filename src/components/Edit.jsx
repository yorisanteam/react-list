import React, { useEffect } from 'react'
import { useState } from 'react';
import { db,} from '../firebase.js';
import {doc, getDoc, setDoc, } from 'firebase/firestore'
import { Link, } from 'react-router-dom';

function Edit() {
    const [text, setText] = useState("");
    const [document, setDocument] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [asin, setAsin] =useState("");
    const [acceptPrice,setAcceptPrice] = useState("");
    const [goodPrice, setGoodPrice] = useState("");
    const [volume, setVolume] = useState("");
    const [nextVolumeDay, setNextVolumeDay] = useState("");
    const [rank, setRank] = useState("");
    const [isCompleted, setIsCompleted] = useState("");
    const [note, setNote] = useState("");
    const [lastUpdateDay, setLastUpdateDay] = useState("");
    let urlid = window.location.pathname.split('/Edit')[1];

    useEffect(() => {
        if(urlid !== ""){
            const shelfComicRef = doc(db, 'shelfComic', urlid);
            getDoc(shelfComicRef).then((snapShot) => {
                const shelfDocs = snapShot._document.data.value.mapValue.fields
                setDocument(urlid);
                setTitle(shelfDocs.title.stringValue);
                setSubtitle(shelfDocs.subtitle.stringValue);
                setAsin(shelfDocs.asin.stringValue);
                setAcceptPrice(shelfDocs.acceptPrice.integerValue);
                setGoodPrice(shelfDocs.goodPrice.integerValue);
                setVolume(shelfDocs.volume.integerValue);
                setNextVolumeDay(shelfDocs.nextVolumeDay.stringValue);
                setRank(shelfDocs.rank.stringValue);
                setIsCompleted(shelfDocs.isCompleted.stringValue);
                setNote(shelfDocs.note.stringValue);
                setLastUpdateDay(shelfDocs.lastUpdateDay.stringValue);
            })
        }
    },[])

    if(urlid !== ""){
        urlid = urlid.split('/')[1]
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {
            title,subtitle,volume,asin,acceptPrice,
            goodPrice,nextVolumeDay,rank,isCompleted,lastUpdateDay,note
            } = event.target.elements;
        const shelfDocumentRef = doc(db,'shelfComic',(text));
        await setDoc(shelfDocumentRef,
            {
                title:title.value,subtitle:subtitle.value,
                volume:volume.value,asin:asin.value,
                acceptPrice:acceptPrice.value,goodPrice:goodPrice.value,
                nextVolumeDay:nextVolumeDay.value,rank:rank.value,
                isCompleted:isCompleted.value,
                lastUpdateDay:lastUpdateDay.value,note:note.value
            });
    };


  return (
    <div className='shelfEdit'>
       <form onSubmit={handleSubmit} className="inputForm">
            <div><h1>追加入力フォーム</h1><p><Link to={'/Shelf'}>棚へ</Link></p></div>
            <div>
                <label>ドキュメント</label>
                <input name="document" type="tex" onChange={(event) => setText(event.target.value)} placeholder={document} />
            </div>
            <div>
                <label>タイトル</label>
                <input name="title" type="text" placeholder={title} />
            </div>
            <div>
                <label>フリガナ</label>
                <input name="subtitle" type="text" placeholder={subtitle} />
            </div>
            <div>
                <label>ASIN</label>
                <input name="asin" type="text" placeholder={asin} />
            </div>
            <div>
                <label>可の最安</label>
                <input name="acceptPrice" type="number" placeholder={acceptPrice} />
            </div>
            <div>
                <label>良の最安</label>
                <input name="goodPrice" type="number" placeholder={goodPrice} />
            </div>
            <div>
                <label>巻数</label>
                <input name="volume" type="number" placeholder={volume} />
            </div>
            <div>
                <label>次巻発売日</label>
                <input name="nextVolumeDay" type="text" placeholder={nextVolumeDay} />
            </div>
            <div>
                <label>ランク</label>
                <input name="rank" type="text" placeholder={rank} />
            </div>
            <div>
                <label>完結</label>
                <input name="isCompleted" type="text" placeholder={isCompleted} />
            </div>
            <div>
                <label>最終更新日</label>
                <input name="lastUpdateDay" type="text" placeholder={lastUpdateDay} />
            </div>
            <div>
                <label>備考</label>
                <input name="note" type="text" placeholder={note} />
            </div>
            <div>
                <button onClick={() => handleSubmit}>登録</button>
            </div>
        </form>
    </div>
  )
}

export default Edit