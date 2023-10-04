function Contacts() {
  return (
    <main className="section">
      <div className="container">
        {/* <!-- <div className="project-details"> --> */}
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p className="title-3">Saint Petersburg, Russia</p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+79112001594" className="title-3">
                +7 (911) 200-15-94
              </a>
            </p>
          </li>

          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:senichev.igor@gmail.com" className="title-3">
                senichev.igor@gmail.com
              </a>
            </p>
          </li>
        </ul>
        {/* <!-- </div> --> */}
      </div>
    </main>
  );
}

export default Contacts;
