import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Header,
  CardMeta,
  CardHeader,
  CardContent,
  Card,
  Button,
  Image
} from "semantic-ui-react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const RecipesList = ({ recipes, searchedQuery }) => {
  const linkRef = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header
        size="large"
        className="recipelist"
        textAlign="center"
      >
        All are the <span style={{color:"red", fontFamily:"cursive"}}>{searchedQuery}</span> recipes
      </Header>
      <Grid centered columns={3} className="grids">
        {recipes &&
          recipes.map((recipe) => (
            <Card data-aos="zoom-in" key={recipe.recipe_id}>
              <Image src={recipe.image_url} style={{ height: 200 }} />
              <CardContent>
                <CardHeader content={recipe.title} />
                <CardMeta>
                  <span>{recipe.publisher}</span>
                </CardMeta>
              </CardContent>
              <CardContent>
                <Button
                  as={Link}
                  ref={linkRef}
                  to={recipe.source_url}
                  target="_blank"
                  content="Detail Recipe"
                  color="olive"
                  rel="noopener noreferrer"
                />
                <Button
                  as={Link}
                  ref={linkRef}
                  to={recipe.publisher_url}
                  target="_blank"
                  content="Publisher"
                  inverted
                  color="olive"
                  rel="noopener noreferrer"
                />
              </CardContent>
            </Card>
          ))}
      </Grid>
    </>
  );
};

export default RecipesList;
