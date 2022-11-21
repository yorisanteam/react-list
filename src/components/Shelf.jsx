import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import { collection, getDocs, doc, QuerySnapshot, setDoc, Timestamp } from 'firebase/firestore';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


function Shelf() {
    const [shelfComic, setShelfComic] = useState([]);
    const [isCompleted, toggleCompleted] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
        const shelfComicRef = collection(db, 'shelfComic');
        getDocs(shelfComicRef).then((QuerySnapshot) => {
            setShelfComic(
                QuerySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id }))
            );
        });
    },[]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {
            id,
            title,
            subtitle,
            volume,
            asin,
            acceptPrice,
            goodPrice,
            nextVolumeDay,
            rank,
            isCompleted,
            lastUpdateDay,
            note
            } = event.target.elements;
        const shelfDocumentRef = doc(db,'shelfComic',(text))
        const documentRef = await setDoc(shelfDocumentRef,
            {
                id: id.value,
                title:title.value,
                subtitle:subtitle.value,
                volume:volume.value,
                asin:asin.value,
                acceptPrice:acceptPrice.value,
                goodPrice:goodPrice.value,
                nextVolumeDay:nextVolumeDay.value,
                rank:rank.value,
                isCompleted:isCompleted.value,
                lastUpdateDay:lastUpdateDay.value,
                note:note.value
            })
    };
    console.log(shelfComic.length);


    // const [expanded, setExpanded] = React.useState(false);
    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    //   };

  return (
    <div className='shelfContent'>
        <h1>棚のコミックリスト</h1>
        <div className='listContent'>
            <div className='lists'>
                {shelfComic.map((shelf) => (
                    <div key={shelf.id} className="list">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                title={shelf.title}
                                subheader={"最終更新日：" + shelf.lastUpdateDay}
                                style={{backgroundColor:"#ffcc80"}}
                            />
                            <CardContent style={{padding:"5px;"}}>
                                <ul>
                                    <li>ASIN : <a href={"https://www.amazon.co.jp/dp/"+shelf.asin} target="_blank" rel="noreferrer">{shelf.asin}</a></li>
                                    <li>可の最安 : {shelf.acceptPrice}円</li>
                                    <li>良の最安 : {shelf.goodPrice}円</li>
                                    <li>ランク : {shelf.rank}</li>
                                    <li>巻数 : {shelf.volume}巻セット</li>
                                    <li>次巻発売日 : {shelf.nextVolumeDay}</li>
                                    <li>{shelf.isCompleted ? "完結" : "未完"}</li>
                                    <li>備考: {shelf.note}</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
        <form onSubmit={handleSubmit} className="inputForm">
            <div><h1>追加入力フォーム</h1></div>
            <div>
                <label>ドキュメント</label>
                <input name="document" type="tex" onChange={(event) => setText(event.target.value)} placeholder="ドキュメント" />
            </div>
            <div>
                <label>id</label>
                <input name="id" type="number" value={shelfComic.length+1} readOnly/>
            </div>
            <div>
                <label>タイトル</label>
                <input name="title" type="text" placeholder="タイトル" />
            </div>
            <div>
                <label>フリガナ</label>
                <input name="subtitle" type="text" placeholder="フリガナ" />
            </div>
            <div>
                <label>ASIN</label>
                <input name="asin" type="text" placeholder="ASIN" />
            </div>
            <div>
                <label>可の最安</label>
                <input name="acceptPrice" type="number" placeholder="可の最安" />
            </div>
            <div>
                <label>良の最安</label>
                <input name="goodPrice" type="number" placeholder="良の最安" />
            </div>
            <div>
                <label>巻数</label>
                <input name="volume" type="number" placeholder="巻数" />
            </div>
            <div>
                <label>次巻発売日</label>
                <input name="nextVolumeDay" type="text" placeholder="2020-01-01の形" />
            </div>
            <div>
                <label>ランク</label>
                <input name="rank" type="text" placeholder="ランク" />
            </div>
            <div>
                <label>完結</label>
                <input name="isCompleted" type="checkbox" checked={isCompleted}  onClick={()=>toggleCompleted(!isCompleted) } placeholder="完結" />
            </div>
            <div>
                <label>最終更新日</label>
                <input name="lastUpdateDay" type="text" placeholder="2020-01-01の形" />
            </div>
            <div>
                <label>備考</label>
                <input name="note" type="text" placeholder="備考" />
            </div>
            <div>
                <button>登録</button>
            </div>
        </form>
    </div>
  )
}

export default Shelf