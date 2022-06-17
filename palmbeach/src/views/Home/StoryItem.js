import React from "react";
import * as Styles from "./homestyle.module.css";
import * as GlobalStyle from "../../global.module.css";

export default function StoryItem({
  image,
  title,
  title02,
  discription,
  datetime,
  read,
  title022,
  title023,
  read2,
  read3
}) {
  return (
    <>
      <div className={`${Styles.storyitem}`}>
        <a href="#">
          <div className="image">
            <img className="image" src={image} />
          </div>
        </a>

        <div
          className={`title ${GlobalStyle.fs_3vw_767} ${GlobalStyle.fs_1vw_1200}`}
        >
          {title}
        </div>

        
        <div
          className={`title02 ${GlobalStyle.fs_5vw_767} ${GlobalStyle.fs_1vw_1200}`}
        >
        
          <a href="/news">{title02}</a>
          <a href="https://www.norton.org/exhibitions/current-exhibitions" target="_blank">{title022}</a>
          <a href="https://bocamuseum.org/art/machu-picchu-and-golden-empires-peru" target="_blank">{title023}</a>
        </div>


        <a href="#">
        <div
          className={`discription ${GlobalStyle.fs_4vw_767} ${GlobalStyle.fs_1vw_a1200}`}
        >
          {discription}
        </div>
        </a>

        <div
          className={`title ${GlobalStyle.fs_3vw_767} ${GlobalStyle.fs_1vw_1200}`}
        >
          {datetime}
          <a href="/news" className="read-more">{read}</a>
          <a href="https://www.norton.org/exhibitions/current-exhibitions" target="_blank" className="read-more">{read2}</a>
          <a href="https://bocamuseum.org/art/machu-picchu-and-golden-empires-peru" target="_blank" className="read-more">{read3}</a>
        </div>

        
      </div>
    </>
  );
}
