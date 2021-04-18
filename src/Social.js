import socialbg from './social-bg.png'

const Social = () => {
  return (
    <div className="content">
      <img src={socialbg} alt="bg" className="background-img" />
      <div className="social-links">
        <td className="symbol" onClick={() => window.open("https://www.youtube.com/channel/UCxa8PPb1CeZQB12k731eJXQ", "_blank")}><i className="lab la-youtube"></i></td>
        <td className="symbol" onClick={() => window.open("https://www.instagram.com/sangeeth_a_k/", "_blank")}><i className="lab la-instagram"></i></td>
        <td className="symbol" onClick={() => window.open("https://twitter.com/sangeeth_a_k", "_blank")}><i className="lab la-twitter"></i></td>
        <td className="symbol" onClick={() => window.open("https://telegram.me/aksangeeth", "_blank")}><i className="lab la-telegram"></i></td>
      </div>
      <p>The best way to contact me? On Telegram </p>
      <h4>Social</h4>

      <div className="yt-container">
        <iframe className="yt-video" src="https://www.youtube-nocookie.com/embed/dWG8IK15dbk?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div className="yt-container">
        <iframe className="yt-video" src="https://www.youtube-nocookie.com/embed/aB01BL0jVe8?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div className="yt-container">
        <iframe className="yt-video" src="https://www.youtube-nocookie.com/embed/QkZxoko_HC0?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div className="yt-container">
        <iframe className="yt-video" src="https://www.youtube-nocookie.com/embed/1uCefKvx9mE?controls=0"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div className="more-link">
        <td onClick={() => window.open("https://www.youtube.com/channel/UCxa8PPb1CeZQB12k731eJXQ", "_blank")}> Load More </td>
      </div>
    </div>
  );

}

export default Social;