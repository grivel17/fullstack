import React from "react";
import Card from "./Card";



export const CardList = (props) => {

    return(
      <>
          {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
      </>
    );

}
