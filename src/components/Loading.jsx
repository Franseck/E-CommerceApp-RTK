import data from "../data";
import "../scss/lesson.scss";

const Lesson = () => {
  return (
    <div className="kapsa">
      <div className="firstCont">
        <h1>Lesson Reminder</h1>
        <div className="disCont">
          {data.map(({ id, name, hour, image }) => {
            return (
              <div className="icCont">
                <div id={id} className="lessons">
                  <img src={image} alt={name} />
                  <div className="naame">
                    <p>
                      <span>Lesson Name: </span>
                      {name}
                    </p>
                    <p>
                      <span>Lesson Hour:</span> {hour}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};




export default Lesson;
