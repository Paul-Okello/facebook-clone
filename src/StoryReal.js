import React from "react";
import Story from "./Story";
import "./StoryReal.css";

function StoryReal() {
  return (
    <div className="storyReal">
      <Story
        image="https://www.concernusa.org/wp-content/uploads/2019/12/concern-malawi-climate-smart-agriculture-esime-esnart-banner-1280x800.jpg"
        profileSrc="https://cdn.countryflags.com/thumbs/malawi/flag-400.png"
        title="Malawi"
      />
      <Story
        image="https://64.media.tumblr.com/0f19ab1c04e2ffe70859eee327100f2c/tumblr_ojvzfrEBpf1r80ikgo1_500.jpg"
        profileSrc="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
        title="Me to You"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFqgQ_eO4SIjCg1QjNiQYN4CPXa2QNBQDsEg&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFqgQ_eO4SIjCg1QjNiQYN4CPXa2QNBQDsEg&usqp=CAU"
        title="Us"
      />
      <Story
        image="https://64.media.tumblr.com/0f19ab1c04e2ffe70859eee327100f2c/tumblr_ojvzfrEBpf1r80ikgo1_500.jpg"
        profileSrc="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
        title="Them"
      />
      <Story
        image="https://ugandarwandagorillatours.com/wp-content/uploads/2019/02/DSC_6773-740x450.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/2000px-Flag_of_Rwanda.svg.png"
        title="Their"
      />
    </div>
  );
}

export default StoryReal;
