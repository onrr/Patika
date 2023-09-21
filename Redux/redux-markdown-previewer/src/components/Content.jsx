import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../redux/markdownSlice";
import { marked } from "marked";

function Content() {

  const dispatch = useDispatch();

  const showHelp = useSelector((state) => state.markdown.showHelp);
  const text = useSelector((state) => state.markdown.text);
  const help = useSelector((state) => state.markdown.help);

  console.log(showHelp)

  const markdown = (text) => {
    return { __html: marked(text) }
  }


  return (
    <div className="content">
      <textarea readOnly={showHelp} value={showHelp ? help : text} onChange={(e) => dispatch(changeText(e.target.value))}  cols="30" rows="10"></textarea>
      <div className="result" dangerouslySetInnerHTML={markdown(showHelp ? help : text)} />
    </div>
  )
}

export default Content