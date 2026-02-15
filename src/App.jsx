import React from 'react'
import Card from './COMPONANTS/Card'
import Index from './COMPONANTS/Index'




const App = () => {

      const cards = [
            {
                  id: "1",
                  url: "https://www.youtube.com/watch?v=cXxfvdVFt58",
                  src: "https://i.ytimg.com/vi/cXxfvdVFt58/hqdefault.jpg",
                  Title: "Virat Kohli 82* vs Pakistan",
                  Channelname: "🏏 Cricket News",
                  Views: "350M views • 1 year ago"
            },
            {
                  id: "1",
                  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                  src: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
                  Title: "Top Pop Music Hit",
                  Channelname: "🎵 Music World",
                  Views: "1.1B views • 10 years ago"
            },
            {
                  id: "3",
                  url: "https://www.youtube.com/watch?v=a_iQb1lnAEQ",
                  src: "https://i.ytimg.com/vi/a_iQb1lnAEQ/hqdefault.jpg",
                  Title: "HTML & CSS Complete Tutorial",
                  Channelname: "🌐 Web Dev Simplified",
                  Views: "890K views • 3 weeks ago"
            },
            {
                  id: "4",
                  url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
                  src: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
                  Title: "Python Full Course",
                  Channelname: "freeCodeCamp.org",
                  Views: "60M views • 3 years ago"
            },
            {
                  id: "5",
                  url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
                  src: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
                  Title: "JavaScript Full Course",
                  Channelname: "Programming with Mosh",
                  Views: "45M views • 2 years ago"
            },
            {
                  id: "6",
                  url: "https://www.youtube.com/watch?v=DLX62G4lc44",
                  src: "https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg",
                  Title: "React Projects for Beginners",
                  Channelname: "Codevolution",
                  Views: "3.2M views • 6 months ago"
            },
            {
                  id: "7",
                  url: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
                  src: "https://i.ytimg.com/vi/JJSoEo8JSnc/hqdefault.jpg",
                  Title: "CSS Flexbox in 20 Minutes",
                  Channelname: "Web Dev Simplified",
                  Views: "4.5M views • 10 months ago"
            },
            {
                  id: "8",
                  url: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
                  src: "https://i.ytimg.com/vi/TlB_eWDSMt4/hqdefault.jpg",
                  Title: "Node.js Crash Course",
                  Channelname: "Traversy Media",
                  Views: "12M views • 1 year ago"
            },
            {
                  id: "9",
                  url: "https://www.youtube.com/watch?v=UrsmFxEIp5k",
                  src: "https://i.ytimg.com/vi/UrsmFxEIp5k/hqdefault.jpg",
                  Title: "Web Development Roadmap",
                  Channelname: "CodeWithHarry",
                  Views: "9.8M views • 2 years ago"
            },
            {
                  id: "10",
                  url: "https://www.youtube.com/watch?v=HcOc7P5BMi4",
                  src: "https://i.ytimg.com/vi/HcOc7P5BMi4/hqdefault.jpg",
                  Title: "HTML Full Course",
                  Channelname: "Apna College",
                  Views: "12M views • 1 year ago"
            }, {
                  id: "2",
                  url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
                  src: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
                  Title: "Best Dance Performance Ever",
                  Channelname: "💃 Dance Studio",
                  Views: "4.9B views • 11 years ago"
            }, {
                  id: "3",
                  url: "https://www.youtube.com/watch?v=3tmd-ClpJxA",
                  src: "https://i.ytimg.com/vi/3tmd-ClpJxA/hqdefault.jpg",
                  Title: "Top Gaming Highlights",
                  Channelname: "🎮 Gaming Hub",
                  Views: "2.3B views • 7 years ago"
            }, {
                  id: "8",
                  url: "https://www.youtube.com/watch?v=fLexgOxsZu0",
                  src: "https://i.ytimg.com/vi/fLexgOxsZu0/hqdefault.jpg",
                  Title: "Best Rap Performance",
                  Channelname: "🎤 Rap Nation",
                  Views: "1.5B views • 9 years ago"
            }, {
                  id: "7",
                  url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
                  src: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
                  Title: "Latin Music Sensation",
                  Channelname: "🔥 Latino Vibes",
                  Views: "8.3B views • 7 years ago"
            }, {
                  id: "6",
                  url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
                  src: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg",
                  Title: "Global Hit Song",
                  Channelname: "🌎 Music Charts",
                  Views: "6.2B views • 7 years ago"
            }
      ]

      const camp = cards.map((card) => {
            return (
                  
                  <div>
                  <Card
                        title={card.Title}
                        channel={card.Channelname}
                        views={card.Views}
                        url={card.url}
                        src={card.src}
                        key={card.id}
                  />
                  </div>
            )
      })

      return (
            <div>
            <Index/>
            <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 20,
                  justifyContent: 'center'
            }}>
                  {camp}
            </div>
            </div>
      )

}



export default App
