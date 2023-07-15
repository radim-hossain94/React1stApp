const Footer = (props) => {
  return (
    <>
      <ol className="list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Name</div>
            {props.myProfile["name"]}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Designation</div>
            {props.myProfile["designation"]}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Company</div>
            {props.myProfile["company"]}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">My Favourate Qoute</div>
            {props.myProfile["quote"]}
          </div>
        </li>
      </ol>
    </>
  );
};

export default Footer