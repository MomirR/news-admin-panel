import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";

const PostCard = ({ post, showAuthor = true }) => {
  return (
    <React.Fragment>
      <Grid item lg={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="image"
              height="140"
              image={post.image}
              title={post.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                "Slika"
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default PostCard;
