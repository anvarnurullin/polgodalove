import './Films.scss'

function Films() {
    return (
        <div className="films-page">
            <h1>Фильмы и сериалы, которые мы смотрели вместе:</h1>
            <div className="films-container">
                <div className="film-card">
                    <img src="/topi.jpg" alt="Топи" />
                    <p>Топи</p>
                </div>
                <div className="film-card">
                    <img src="/challengers.jpg" alt="" />
                    <p>Challengers</p>
                </div>
                <div className="film-card">
                    <img src="/Inside_Out_2_poster.jpg" alt="" />
                    <p>Inside Out 2</p>
                </div>
                <div className="film-card">
                    <img src="/soul1.webp" alt="" />
                    <p>Soul</p>
                </div>
                <div className="film-card">
                    <img src="/oppenheimer.jpg" alt="" />
                    <p>Oppenheimer</p>
                </div>
                <div className="film-card">
                    <img src="/bb.webp" alt="" />
                    <p>Breaking Bad</p>
                </div>
                <div className="film-card">
                    <img src="/bcs.jpg" alt="" />
                    <p>Better Call Saul</p>
                </div>
            </div>
        </div>
    );
}

export default Films;