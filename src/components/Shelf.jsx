import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import { collection, getDocs, doc, QuerySnapshot, Timestamp, deleteDoc } from 'firebase/firestore';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


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
    const navigate = useNavigate();

    useEffect(() => {
        const shelfComicRef = collection(db, 'shelfComic');
        getDocs(shelfComicRef).then((QuerySnapshot) => {
            setShelfComic(
                QuerySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id }))
            );
        });
    },[]);

    // 削除ボタン
    const deleteComic = async (id) => {
        const comicDocumentRef = doc(db,'shelfComic',id);
        await deleteDoc(comicDocumentRef);
        window.location.reload();
    }


  return (
    <div className='shelfContent'>
        <h1>棚のコミックリスト</h1>
        <div className='listContent'>
            <div className='lists'>
                {shelfComic.map((shelf) => (
                    <div key={shelf.id} className="list">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
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
                                    <li>{shelf.isCompleted}</li>
                                    <li>備考: {shelf.note}</li>
                                    {/* <li>
                                        <Link to={'/Edit/' + shelf.id}>
                                            編集
                                        </Link>
                                        <Button size="small" color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteComic(shelf.id)}>削除</Button>
                                    </li> */}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Shelf