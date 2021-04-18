import workbg from './work-bg.png'

const Work = () => {
  return (
    <div className="content">
      <img src={workbg} alt="bg" className="background-img" />
      <h4>Work</h4>
      <p>
        Engineer @ QBurst
      </p>
      <h4>Skills</h4>
      <ul className="List">
        <li>Golang</li>
        <li>React</li>
        <li>NodeJs</li>
      </ul>
    </div>
  );

}

export default Work;