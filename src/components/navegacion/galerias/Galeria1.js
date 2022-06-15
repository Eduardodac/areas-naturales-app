import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import img91 from "../../../assets/Imágenes-Tehuacán/9-1.jpg";
// import img10 from "../../../assets/Imágenes-Tehuacán/10.jpg";
// import img11 from "../../../assets/Imágenes-Tehuacán/11.jpg";
// import img12 from "../../../assets/Imágenes-Tehuacán/12.jpg";
// import img13 from "../../../assets/Imágenes-Tehuacán/13-2.jpg";
// import img14 from "../../../assets/Imágenes-Tehuacán/14.jpg";
// import img15 from "../../../assets/Imágenes-Tehuacán/15.jpg";
// import img16 from "../../../assets/Imágenes-Tehuacán/16.jpg";
import { Container } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';

// console.log(img91);
// console.log(img10);
// console.log(img11);
// console.log(img12);
// console.log(img13);
// console.log(img14);
// console.log(img15);
// console.log(img16);


export default function Galeria1(props) {

    const smW = useMediaQuery('(min-width:600px)');
    const mdW = useMediaQuery('(min-width:900px)');
    const lgW = useMediaQuery('(min-width:1200px)');

    let widthVariable= 350;
    let heightVariable= 3000;
    let colsVariable= 1;

    if (smW && !mdW){
        widthVariable= 600;
        heightVariable= 1250;
        colsVariable= 2;
    }else if (mdW && !lgW){
        widthVariable= 1200;
        heightVariable= 520;
        colsVariable= 4;
    }else if (lgW){
        console.log("se activa")
        widthVariable= 1200;
        heightVariable= 560;
        colsVariable= 4;

    }

  return (

    <Container component ="main" sx={{marginTop: "20px", display :"flex", justifyContent:"center"}}>
      <ImageList
        sx={{ width: widthVariable, height: heightVariable }}
        cols={colsVariable}
        rowHeight={"auto"}
        gap={20}
      >
        {props.itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

