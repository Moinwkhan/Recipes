import React, { useState } from "react";
import { Grid, Form, Input, Button } from "semantic-ui-react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function Search({ setsearchedQuery }) {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [value, setValue] = useState("");

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "en-US" });

  const onFormSubmit = (e) => {
    e.preventDefault();
    setsearchedQuery(value || transcript);
    resetTranscript();
  };

  return (
    <Grid className="search-box">
      <Grid.Column>
        <Form onSubmit={onFormSubmit}>
          <h2 className="search">
            Search here the Recipelist from <span style={{ color: "violet" }}>our Recipes</span>
          </h2>
          <Input
            className="inputss"
            placeholder="Pizza Pasta Noodles Burger"
            action={{
              icon: "search",
              color: "olive",
              onClick: onFormSubmit,
            }}
            onChange={(e) => setValue(e.target.value)}
            value={value} 
          />
          <Button
            className="iconss"
            color="olive"
            onMouseDown={startListening}
            onMouseUp={() => {
              SpeechRecognition.stopListening();
              setValue(transcript);
            }}
            icon="microphone"
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Search;
