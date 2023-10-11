import './style.css';

function BtnView({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline-view">
      Просмотреть проект
    </a>
  );
}

export default BtnView;
