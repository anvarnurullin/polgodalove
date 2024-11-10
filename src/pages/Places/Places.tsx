import './Places.scss'

function Places() {
    return ( 
        <div className="films-page">
            <h1>Места, которые мы посетили:</h1>
            <div className="films-container">
                <a href="http://www.etomesto.ru/trackab26311243/" target="_blank">
                    <div className="film-card">
                    <img src="/vyborg.jpeg" alt="Топи" />
                    <p>Выборг</p>
                    </div>
                </a>
                <a href="http://www.etomesto.ru/track26bc311210/" target="_blank">
                <div className="film-card">
                    <img src="/kazan.jpeg" alt="" />
                    <p>Казань</p>
                </div>
                </a>
                <a href="http://www.etomesto.ru/track890f311242/" target="_blank">
                <div className="film-card">
                    <img src="/oran.jpeg" alt="" />
                    <p>Ораниенбаум</p>
                </div>
                </a>
                <a href="http://www.etomesto.ru/track928d311218/" target="_blank">
                <div className="film-card">
                    <img src="/moscow.jpeg" alt="" />
                    <p>Москва</p>
                </div>
                </a>
                <a href="http://www.etomesto.ru/track1a1a311971/" target="_blank">
                <div className="film-card">
                    <img src="/kazan2.jpeg" alt="" />
                    <p>Казань 2</p>
                </div>
                </a>
            </div>
        </div>
    );
}

export default Places;