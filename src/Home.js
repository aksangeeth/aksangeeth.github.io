import homebg from './home-bg.png'

const Home = () => {
  return (
    <div className="content">
      <img src={homebg} alt="bg" className="background-img" />
      <h4>Hello &#129299;</h4>

      {/* <div className="card-list-item">
        <div className="card-list-icon">Hel</div>
        <div className="card-list-link">lo</div>
      </div> */}

      <p>
        Yeah I want your attention. I love it. <br />
        And I am not ashamed of admitting it.
      </p>

      <h4>Blog Posts (coming soon)</h4>
      <ul>
        <li>Deep listening</li>
        <li>The Tolstoy Farm</li>
        <li>Panic attacks</li>
        <li>The god delusion</li>
      </ul>
    </div>


  );
}

export default Home;