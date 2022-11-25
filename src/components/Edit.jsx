import React, { useEffect } from 'react'
import { useState } from 'react';
import { db,} from '../firebase.js';
import {doc, QuerySnapshot, setDoc } from 'firebase/firestore'
import {collection, getDocs} from 'firebase/firestore'


function Edit() {
    const [shelfComic, setShelfComic] = useState([]);
    const [isCompleted, toggleCompleted] = useState(false);
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
    const [note, setNote] = useState("");
    const [lastUpdateDay, setLastUpdateDay] = useState("");
    let urlid = window.location.pathname.split('/Edit')[1];

    useEffect(() => {
        const shelfComicRef = collection(db, 'shelfComic');
        getDocs(shelfComicRef).then((QuerySnapshot) => {
            setShelfComic(
                QuerySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id }))
            );
        });
    },[]);


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
        const documentRef = await setDoc(shelfDocumentRef,
            {
                title:title.value,subtitle:subtitle.value,
                volume:volume.value,asin:asin.value,
                acceptPrice:acceptPrice.value,goodPrice:goodPrice.value,
                nextVolumeDay:nextVolumeDay.value,rank:rank.value,
                isCompleted:isCompleted.value,
                lastUpdateDay:lastUpdateDay.value,note:note.value
            });
    };

    // useEffect(() => {
    //     if(urlid !== ""){
    //         const shelfComicRef = doc(db, 'shelfComic');
    //         // getDocs(shelfComicRef).then((QuerySnapshot) => {
    //         //     setShelfComic(
    //         //         QuerySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id }))
    //         //     );
    //         // });
    //         console.log(urlid + 'だよ')
    //         // const docSnap = getDoc(shelfComicRef);
    //         // const product = docSnap.data()
    //         // setDocument(product.document)
    //         // setTitle(product.title)
    //         // setSubtitle(product.subtitle)
    //         // setAsin(product.asin)
    //         // setAcceptPrice(product.acceptPrice)
    //         // setGoodPrice(product.goodPrice)
    //         // setVolume(product.volume)
    //         // setNextVolumeDay(product.nextVolumeDay)
    //         // setRank(product.rank)
    //         // setNote(product.note)
    //         // setLastUpdateDay(product.lastUpdateDay)
    //     }
    // },[])


  return (
    <div className='shelfEdit'>
       <form onSubmit={handleSubmit} className="inputForm">
            <div><h1>追加入力フォーム</h1></div>
            <div>
                <label>ドキュメント</label>
                <input name="document" type="tex" onChange={(event) => setText(event.target.value)} />
            </div>
            <div>
                <label>タイトル</label>
                <input name="title" type="text" />
            </div>
            <div>
                <label>フリガナ</label>
                <input name="subtitle" type="text" />
            </div>
            <div>
                <label>ASIN</label>
                <input name="asin" type="text" />
            </div>
            <div>
                <label>可の最安</label>
                <input name="acceptPrice" type="number" />
            </div>
            <div>
                <label>良の最安</label>
                <input name="goodPrice" type="number" />
            </div>
            <div>
                <label>巻数</label>
                <input name="volume" type="number" />
            </div>
            <div>
                <label>次巻発売日</label>
                <input name="nextVolumeDay" type="text" />
            </div>
            <div>
                <label>ランク</label>
                <input name="rank" type="text" />
            </div>
            <div>
                <label>完結</label>
                <input name="isCompleted" type="text" />
            </div>
            <div>
                <label>最終更新日</label>
                <input name="lastUpdateDay" type="text" />
            </div>
            <div>
                <label>備考</label>
                <input name="note" type="text" />
            </div>
            <div>
                <button onClick={() => handleSubmit()}>登録</button>
            </div>
        </form>
    </div>
  )
}

export default Edit