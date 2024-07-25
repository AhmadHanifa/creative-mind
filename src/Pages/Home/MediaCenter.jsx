import React from "react";
import Title from "../../Components/Title/Title";
import NewsItem from "../../Components/News/NewsItem";
// import Slider from '../../Components/Slider/Slider'

const MediaCenter = () => {
  return (
    <div>
      <div className="px-8 md:px-44 py-16 grid gap-8 creative-bg2">
        <Title title="Media Center" />
        {/* <Slider /> */}
        <div className="grid lg:grid-cols-2 gap-8">
          <NewsItem
            title="New Study Finds That Exercise Can Improve Mental Health"
            date="2022-07-23"
            img="https://images.unsplash.com/photo-1593789198777-f29bc259780e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            url="https://www.example.com/news/exercise-improves-mental-health"
          />
          <NewsItem
            title="New Legislation Aims to Address Climate Change"
            date="2023-02-15"
            img="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            url="https://www.example.com/news/climate-change-legislation"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaCenter;
