import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

//#region image
import image1 from "../../image/후원목록이미지.png";

const UserProfileEdit = () => {
    return (
        <div className="app">
            <Sidebar />

            <Card style={{ height: '400px', width: "300px", margin: '30px' }}>
                <CardMedia
                    component="img"
                    image={image1}
                    style={{ height: '60%' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" align="justify">
                        저좀 도와 주세요  
                        <Chip label="ETC" variant="outlined"/>
                    </Typography>
                    <Typography gutterBottom variant="button" component="div">
                        저좀 도와 주세요 dsadsad....
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                        15.3/30 EHT
                    </Typography>
                    <div width='100%'>
                        <div width='100px' float='left'>
                        <Avatar />
                        </div>
                        <div width='200px' float='right'>
                        <Typography gutterBottom variant="h6" >
                            정우진
                            jwj060111@gmail.com
                        </Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default UserProfileEdit;