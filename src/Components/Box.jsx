import "./Box.css";

function Box() {
  return (
    <div className="margin-box">
      <span className="label margin-label">Margin</span>

      <div className="border-box">
        <span className="label border-label">Border</span>

        <div className="padding-box">
          <span className="label padding-label">Padding</span>

          <div className="content-box">
            <span className="label content-label">Content</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Box;