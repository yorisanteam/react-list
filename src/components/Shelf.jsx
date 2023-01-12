import React from 'react';
import { Link, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';


// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));


function Shelf() {
    const [shelfComic, setShelfComic] = useState([]);

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
        <p><Link to={'/Edit'}>追加</Link></p>
        <div className='listContent'>
            <div className='lists'>
                {shelfComic.map((shelf) => (
                    <div key={shelf.id} className="list">
                        <Card sx={{ maxWidth: 300, }}>
                            <CardHeader
                                // action={
                                // <IconButton aria-label="settings">
                                //     <MoreVertIcon />
                                // </IconButton>
                                // }
                                title={shelf.title}
                                titleTypographyProps={{fontSize:"1rem",fontWeight:"700"}}
                                subheader={"最終更新日：" + shelf.lastUpdateDay}
                                subheaderTypographyProps={{fontSize:"0.6rem",color:"#f50057"}}
                                style={{backgroundColor:"#ffcc80",padding:"4px"}}
                            />
                            <CardContent sx={{fontSize:"0.5rem",padding:"4px"}}>
                                <ul className="cardContent">
                                    <li>ASIN : <a href={"https://www.amazon.co.jp/dp/"+shelf.asin} target="_blank" rel="noreferrer">{shelf.asin}</a></li>
                                    <li>可の最安 : {shelf.acceptPrice}円</li>
                                    <li>良の最安 : {shelf.goodPrice}円</li>
                                    <li>ランク : {shelf.rank}</li>
                                    <li>巻数 : {shelf.volume}巻セット</li>
                                    <li>次巻発売日 : {shelf.nextVolumeDay}</li>
                                    <li>{shelf.isCompleted}</li>
                                    <li>備考: {shelf.note}</li>
                                    <li>
                                        <Link to={'/Edit/' + shelf.id}>
                                            編集
                                        </Link>
                                        <button type="button" className="delButton" onClick={() => deleteComic(shelf.id)}>削除</button>
                                    </li>
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